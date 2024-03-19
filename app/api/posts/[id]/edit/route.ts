import { NextRequest } from "next/server";
import { Post } from "@/types/post";

export async function POST(request: NextRequest, { params }: { params: { id: string } }) {
  const data : Post = await request.json();
  console.log(params);
  const result = await fetch(
    `https://api.github.com/repos/dada878/dcard-homework/issues/${params.id}`,
    {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        title: data.title,
        body: data.content,
      }),
    }
  );
  console.log(result);
  return new Response('Hello, Next.js!', {
    status: 200,
  });
}