"use client";

import { startTransition, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import PostEditor from "@/components/global/postEditor";
import { getPost, updatePost } from "@/actions/posts";

export default function EditPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [post, setPost] = useState<Post>();
  useEffect(() => {
    getPost(params.id).then((data) => {
      setPost(data);
    });
  }, [post?.id, params.id]);
  const createPostCallback = (post: Post) => {
    updatePost(params.id, post).then(() => {
      startTransition(() => router.push("/blogs"));
      startTransition(() => router.refresh());
    });
  };
  return (
    <div>
      <PostEditor
        callback={createPostCallback}
        defaultPost={post}
        confirmButtonText="儲存文章變更"
      />
    </div>
  );
}
