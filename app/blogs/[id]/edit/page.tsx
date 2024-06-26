"use client";

import { startTransition, useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import { getPost, updatePost } from "@/actions/posts";
import PostEditor from "@/components/blog/editor/blogEditor";
import useAdminOnly from "@/hooks/useAdminOnly";

export default function EditPage({
  params,
}: Readonly<{ params: { id: string } }>) {
  const router = useRouter();
  const [post, setPost] = useState<Post>();

  useAdminOnly();

  // load post data you want to edit
  useEffect(() => {
    getPost(params.id).then((data) => {
      setPost(data);
    });
  }, [params.id]);

  const createPostCallback = (post: Post) => {
    updatePost(params.id, post).then(() => {
      router.push("/blogs");
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
