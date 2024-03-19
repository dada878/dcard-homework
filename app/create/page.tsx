"use client";
import PostEditor from "@/components/global/postEditor";
import { Post } from "@/types/post";
import { useRouter } from "next/navigation";

export default function CreatePage() {
  const router = useRouter();
  const createPostCallback = (post: Post) => {
    fetch("/api/create", {
      method: "POST",
      body: JSON.stringify(post),
    }).then(() => {
      router.push("/blogs");
    });
  };
  return (
    <PostEditor
      callback={createPostCallback}
      confirmButtonText="確認發布文章"
    />
  );
}
