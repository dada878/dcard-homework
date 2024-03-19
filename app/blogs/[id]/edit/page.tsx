"use client";
import PostEditor from "@/components/global/postEditor";
import { Post } from "@/types/post";

export default function EditPage() {
  const createPostCallback = (post: Post) => {
    fetch("/api/posts/5/edit", {
      method: "POST",
      body: JSON.stringify(post),
    });
  };
  return (
    <div>
      <PostEditor callback={createPostCallback} confirmButtonText="儲存文章變更" />
    </div>
  );
}