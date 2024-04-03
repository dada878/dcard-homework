"use client";

import { useOptimistic } from "react";

import { useRouter } from "next/navigation";

import { getLoginUser, getLoginUserAvatar } from "@/actions/auth";
import { createComment } from "@/actions/posts";
import BlogComment from "@/components/comments/comment";
import CommentEditor from "@/components/comments/commentEditor";

import MarkdownRender from "../utilities/markdownRender";

export default function CommentSection({
  comments,
  postId,
}: Readonly<{
  comments: Array<CommentData>;
  postId: string;
}>) {
  const router = useRouter();
  const [optimisticComments, addOptimisticComments] = useOptimistic(
    comments,
    (state, newComment: CommentData) => {
      return [...state, newComment];
    },
  );

  const submitHandler = async (formData: FormData) => {
    const commentContent = formData.get("content") as string;
    addOptimisticComments({
      date: new Date(),
      content: commentContent,
      author: (await getLoginUser()) as string,
      avatar: (await getLoginUserAvatar()) as string,
      sending: true,
      id: -1,
    });
    await createComment(postId, commentContent);
    router.refresh();
  };

  return (
    <>
      {optimisticComments.map((comment: CommentData, i: number) => (
        <BlogComment
          key={comment.id}
          userName={comment.author}
          avatarUrl={comment.avatar}
          date={new Date(comment.date)}
          sending={comment.sending}
        >
          <MarkdownRender content={comment.content} />
        </BlogComment>
      ))}
      <CommentEditor postId={postId} callback={submitHandler} />
    </>
  );
}
