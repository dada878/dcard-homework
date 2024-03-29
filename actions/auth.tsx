"use server";

import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export async function getLoginUser() {
  const session = await getServerSession(authOptions);
  return session?.user.id || undefined;
}

export async function getLoginUserAvatar() {
  const session = await getServerSession(authOptions);
  return session?.user.image || undefined;
}

export async function isOwner() {
  const session = await getServerSession(authOptions);
  return session?.user.role === "admin";
}