import NextAuth from "next-auth";
import Facebook from "next-auth/providers/facebook";
import Google from "next-auth/providers/google";

import type { Provider } from "next-auth/providers";
import "next-auth/jwt";
import { ClientUserLogin } from "./services/clientLogin";

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
      // First sign-in only (account is set); later calls return the token as is.
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
        }

        if (account.provider === "facebook") {
          token.image = profile?.picture?.data?.url;
        }

        token.provider = account.provider;
        return token;
      }

      return token;
    },

    async signIn({ user, account, profile }) {
      if (!profile?.email) return false;

      // Deactivated accounts cannot sign in; staff reactivate them in the
      // admin (owner decision). Shown on the login page.
      if (account && user?.email) {
        const client = await ClientUserLogin(user.email, account.provider);
        if (client?.status === "inactive") {
          return "/login?error=AccountInactive";
        }
      }

      return true;
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
