"use client";

import { startTransition, useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import { getPost, updatePost } from "@/actions/posts";
import PostEditor from "@/components/blog/editor/blogEditor";

export default function EditPage({
  params,
}: Readonly<{ params: { id: string } }>) {
  const router = useRouter();
  const [post, setPost] = useState<Post>();

  // load post data you want to edit
  useEffect(() => {
    getPost(params.id).then((data) => {
      setPost(data);
    });
  }, [params.id]);

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
