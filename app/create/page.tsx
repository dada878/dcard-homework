"use client";
import PostEditor from "@/components/global/postEditor";
import { Post } from "@/types/post";

export default function CreatePage() {
  const createPostCallback = (post: Post) => {
    fetch("/api/create", {
      method: "POST",
      body: JSON.stringify(post),
    });
  };
  return (
    <PostEditor
      callback={createPostCallback}
      confirmButtonText="確認發布文章"
    />
  );
}
