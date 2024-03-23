import { NextResponse } from "next/server";
import { Post } from "@/types/post";
import { unstable_noStore as noStore } from "next/cache";

export async function GET() {
  noStore();
  const result = await fetch(
    `https://api.github.com/repos/${process.env.GITHUB_REPO_OWNER}/${process.env.GITHUB_REPO_NAME}/issues?q=state:open&sort=updated`,
    {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`,
      },
      next: {
        tags: ["posts"],
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
