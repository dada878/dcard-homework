import { NextRequest, NextResponse } from "next/server";
import { Post } from "@/types/post";

export async function GET(request: NextRequest) {
  const result = await fetch(
    "https://api.github.com/repos/dada878/dcard-homework/issues?q=state:open",
    {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`,
      },
    }
  );
  const data = await result.json();
  const posts: Array<Post> = [];
  for (const post of data) {
    posts.push({
      title: post.title,
      content: post.body,
      category: "React.js",
      tags: ["React", "JavaScript"],
      date: new Date(post.created_at),
      description: "",
      id: post.number,
    });
  }
  return NextResponse.json(posts);
}
