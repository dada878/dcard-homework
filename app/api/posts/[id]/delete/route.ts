import { NextRequest } from "next/server";
import { Post } from "@/types/post";
import { revalidateTag } from "next/cache";

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const data: Post = await request.json();
  const result = await fetch(
    `https://api.github.com/repos/${process.env.GITHUB_REPO_OWNER}/${process.env.GITHUB_REPO_NAME}/issues/${params.id}`,
    {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        title: data.title,
        body: data.content,
        state: "closed",
      }),
    }
  );
  revalidateTag("posts");
  return new Response(null, {
    status: result.status,
  });
}
