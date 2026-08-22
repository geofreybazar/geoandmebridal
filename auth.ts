import NextAuth from "next-auth";
import Facebook from "next-auth/providers/facebook";
import Google from "next-auth/providers/google";

import type { Provider } from "next-auth/providers";
import "next-auth/jwt";
import { ClientUserLogin } from "./services/clients";

const providers: Provider[] = [
  Facebook({
    clientId: process.env.AUTH_FACEBOOK_ID,
    clientSecret: process.env.AUTH_FACEBOOK_SECRET,
    async profile(profile) {
      return { ...profile };
    },
  }),
  Google({
    clientId: process.env.AUTH_GOOGLE_ID,
    clientSecret: process.env.AUTH_GOOGLE_SECRET,
    authorization: { params: { access_type: "offline", prompt: "consent" } },
    async profile(profile) {
      return { ...profile };
    },
  }),
];

export const providerMap = providers
  .map((provider) => {
    if (typeof provider === "function") {
      const providerData = provider();
      return { id: providerData.id, name: providerData.name };
    } else {
      return { id: provider.id, name: provider.name };
    }
  })
  .filter((provider) => provider.id !== "credentials");

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers,

  callbacks: {
    async jwt({ token, account, user, profile }) {
      /**
       * 1️⃣ FIRST LOGIN LOGIC
       * Runs only when account exists
       */

      if (account && user?.email) {
        const client = await ClientUserLogin(user.email, account.provider);

        if (client) {
          token.firstName = client.firstName;
          token.lastName = client.lastName;
          token.clientId = client._id;
        } else {
          token.isNewUser = true;
          token.firstName = profile?.given_name;
          token.lastName = profile?.family_name;
        }

        if (account.provider === "google") {
          token.image = profile?.picture;
        } else if (account.provider === "facebook") {
          token.image = profile?.picture.data.url;
        }

        if (account.provider === "google") {
          token.access_token = account.access_token;
          token.expires_at = account.expires_at;
          token.refresh_token = account.refresh_token;
        }

        // for facebook auth (facebook dont use refresh token it only converts short live token to long live token)
        if (account.provider === "facebook") {
          const facebookToken = await getFacebookLongLivedToken(
            account.access_token!,
          );

          token.access_token = facebookToken.access_token;

          token.expires_at = Math.floor(
            Date.now() / 1000 + facebookToken.expires_in,
          );
        }

        return token;
      }

      /**
       * 2️⃣ TOKEN STILL VALID
       */
      if (token.expires_at && Date.now() < token.expires_at * 1000) {
        return token;
      }

      /**
       * 3️⃣ REFRESH TOKEN FLOW
       */
      if (token.provider === "google") {
        if (!token.refresh_token) {
          throw new TypeError("Missing refresh_token");
        }

        try {
          const response = await fetch("https://oauth2.googleapis.com/token", {
            method: "POST",
            body: new URLSearchParams({
              client_id: process.env.AUTH_GOOGLE_ID!,
              client_secret: process.env.AUTH_GOOGLE_SECRET!,
              grant_type: "refresh_token",
              refresh_token: token.refresh_token,
            }),
          });

          const tokens = await response.json();
          if (!response.ok) throw tokens;

          return {
            ...token,
            access_token: tokens.access_token,
            expires_at: Math.floor(Date.now() / 1000 + tokens.expires_in),
            refresh_token: tokens.refresh_token ?? token.refresh_token,
          };
        } catch (error) {
          console.error("Error refreshing access_token", error);
          token.error = "RefreshTokenError";
          return token;
        }
      }

      return token;
    },

    async signIn({ profile }) {
      return !!profile?.email;
    },

    async session({ session, token }) {
      session.user.image = token.image;
      session.user.id = token.clientId!;
      session.user.email = token.email!;
      session.user.firstName = token.firstName!;
      session.user.lastName = token.lastName!;
      session.user.provider = token.provider;
      session.user.clientId = token.clientId;
      session.isNewUser = token.isNewUser ?? false;

      return session;
    },
  },

  pages: {
    signIn: "/login",
    signOut: "/",
    // error: "/auth/error", // Error code passed in query string as ?error=
    // verifyRequest: "/auth/verify-request", // (used for check email message)
    // newUser: "/auth/new-user", // New users will be directed here on first sign in (leave the property out if not of interest)
  },
});

declare module "next-auth" {
  interface Session {
    error?: "RefreshTokenError";
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    access_token?: string;
    expires_at?: number;
    refresh_token?: string;
    error?: "RefreshTokenError";
  }
}

async function getFacebookLongLivedToken(accessToken: string) {
  const GRAPH_API_VERSION = "v23.0";
  const params = new URLSearchParams({
    grant_type: "fb_exchange_token",
    client_id: process.env.AUTH_FACEBOOK_ID!,
    client_secret: process.env.AUTH_FACEBOOK_SECRET!,
    fb_exchange_token: accessToken,
  });

  const response = await fetch(
    `https://graph.facebook.com/${GRAPH_API_VERSION}/oauth/access_token?${params}`,
    {
      method: "GET",
    },
  );

  const data = await response.json();

  if (!response.ok) {
    console.error("Facebook token exchange failed:", data);
    throw new Error("Failed to exchange Facebook access token");
  }

  return data;
}
