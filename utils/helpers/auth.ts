import { NextAuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import type { Adapter } from 'next-auth/adapters';
import { FirestoreAdapter } from "@auth/firebase-adapter";

export const authOptions : NextAuthOptions = {
  adapter: FirestoreAdapter() as Adapter,
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_APP_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_APP_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      session.accessToken = token.accessToken as string;
      return session;
    },
    async jwt({ token, user, account, profile }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    }
  },
};