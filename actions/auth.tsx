"use server";

import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export async function getLoginUser() {
  const session = await getServerSession(authOptions);
  return session?.user.name || "Guest";
}

export async function isOwner() {
  const session = await getServerSession(authOptions);
  return session?.user.email === process.env.GITHUB_REPO_OWNER_EMAIL;
}