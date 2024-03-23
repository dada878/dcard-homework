import { NextResponse } from "next/server";
import { Comment } from "@/types/comment";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const result = await fetch(
    `https://api.github.com/repos/${process.env.GITHUB_REPO_OWNER}/${process.env.GITHUB_REPO_NAME}/issues/${id}/comments`,
    {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`,
      },
    }
  );
  const data = await result.json();
  const comments: Comment[] = data.map((comment: any) => {
    return {
      author: comment.user.login,
      content: comment.body,
      avatar: comment.user.avatar_url,
      date: new Date(comment.created_at),
    };
  });
  return NextResponse.json(comments);
}
