import { NextRequest, NextResponse } from "next/server";
import { Post } from "@/types/post";
import { revalidateTag } from "next/cache";

export async function POST(request: NextRequest) {
  const data: Post = await request.json();
  const result = await fetch(
    "https://api.github.com/repos/dada878/dcard-homework/issues",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        title: data.title,
        body: data.content,
      }),
    }
  );
  revalidateTag("posts");
  const post = await result.json();
  return Response.json({ id: post.number });
}
