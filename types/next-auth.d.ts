import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    accessToken: string;
    expires: string;
    user: {
      address: string;
      role: string;
      id: string;
    } & DefaultSession["user"];
  }
  interface Profile {
    login: string;
  }
}
