"use server";

import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function getLoginUser() {
  const session = await getServerSession(authOptions);
  return session?.user.name || "Guest";
}