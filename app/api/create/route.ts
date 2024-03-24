import { NextRequest } from "next/server";
import { Post } from "@/types/post";
import { revalidatePath } from "next/cache";

export async function POST(request: NextRequest) {
  const data: Post = await request.json();
  const result = await fetch(
    `https://api.github.com/repos/${process.env.GITHUB_REPO_OWNER}/${process.env.GITHUB_REPO_NAME}/issues`,
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
  revalidatePath("/blogs");
  const post = await result.json();
  return Response.json({ id: post.number });
}
