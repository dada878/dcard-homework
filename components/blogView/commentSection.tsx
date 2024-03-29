"use client";

import { useRouter } from "next/navigation";
import { useOptimistic } from "react";

import Markdown from "markdown-to-jsx";

import { getLoginUser, getLoginUserAvatar } from "@/actions/auth";
import BlogComment from "./comment";
import CommentEditor from "./commentEditor";
import { createComment } from "@/actions/posts";

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
