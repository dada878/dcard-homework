"use server";

import { getServerSession } from "next-auth";

import { authOptions } from "@/lib/auth";

export async function getLoginUser() {
  const session = await getServerSession(authOptions);
  return session?.user.id ?? undefined;
}

export async function getLoginUserAvatar() {
  const session = await getServerSession(authOptions);
  return session?.user.image ?? undefined;
}

export async function isAdmin() {
  const session = await getServerSession(authOptions);
  return session?.user.role === "admin";
}
