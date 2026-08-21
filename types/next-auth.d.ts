import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      clientId?: string;
      firstName?: string | null;
      lastName?: string | null;
      provider?: string;
    } & DefaultSession["user"];

    isNewUser?: boolean;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    clientId?: string;
    isNewUser?: boolean;
    firstName?: string | null;
    lastName?: string | null;
    provider?: string;
    image: string;
  }
}
