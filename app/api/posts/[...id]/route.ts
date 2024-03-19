import { NextResponse } from "next/server";
import { Post } from "@/types/post";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const result = await fetch(`https://api.github.com/repos/dada878/dcard-homework/issues/${id}`, {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`,
    },
  });
  const data = await result.json();
  const post: Post = {
    title: data.title,
    content: data.body,
    category: "React.js",
    tags: ["React", "JavaScript"],
    date: new Date(data.created_at),
    id: data.number,
  };
  return NextResponse.json(post);
}
