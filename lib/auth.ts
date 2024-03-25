import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import type { Adapter } from "next-auth/adapters";
import { FirestoreAdapter } from "@auth/firebase-adapter";
import { cert } from "firebase-admin/app";

export const authOptions: NextAuthOptions = {
  adapter: FirestoreAdapter({
    credential: cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY!.replaceAll("\\n", "\n"),
    }),
  }) as Adapter,
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_APP_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_APP_CLIENT_SECRET as string,
      authorization: {
        params: {
          scope: "public_repo,user:email",
        },
      },
      profile(profile) {
        return profile;
      },
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      session.accessToken = token.accessToken as string;
      session.user.id = token.userId as string;
      session.user.role = token.role as string;
      return session;
    },
    async jwt({ token, user, account, profile }) {
      if (account) {
        token.userId = profile?.login;
        token.role =
          process.env.GITHUB_REPO_OWNER === profile?.login ? "admin" : "user";
        token.accessToken = account.access_token;
      }
      return token;
    },
  },
};
