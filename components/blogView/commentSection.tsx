"use client";
import Markdown from "markdown-to-jsx";
import BlogComment from "./comment";
import { useRouter, useSearchParams } from "next/navigation";
import CommentEditor from "./commentEditor";
import { startTransition, useOptimistic } from "react";
import { createComment } from "@/actions/posts";
import { getLoginUser, getLoginUserAvatar } from "@/actions/auth";

export default function CommentSection({
  comments,
  postId,
}: {
  comments: Array<CommentData>;
  postId: string;
}) {
  const router = useRouter();
  const [optimisticComments, addOptimisticComments] = useOptimistic(
    comments,
    (state, newComment: CommentData) => {
      return [...state, newComment];
    }
  );

  const submitHandler = async (formData: FormData) => {
    const commentContent = formData.get("content") as string;
    addOptimisticComments({
      date: new Date(),
      content: commentContent,
      author: await getLoginUser() as string,
      avatar: await getLoginUserAvatar() as string,
      sending: true,
    });
    await createComment(postId, commentContent);
    router.refresh();
  };

  return (
    <>
      {optimisticComments.map((comment: CommentData, i: number) => (
        <BlogComment
          key={i}
          userName={comment.author}
          avatarUrl={comment.avatar}
          date={new Date(comment.date)}
          sending={comment.sending}
        >
          <Markdown>{comment.content}</Markdown>
        </BlogComment>
      ))}
      <CommentEditor postId={postId} callback={submitHandler} />
    </>
  );
}
