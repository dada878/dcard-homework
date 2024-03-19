"use client";
import PostEditor from "@/components/global/postEditor";
import { Post } from "@/types/post";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function EditPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [post, setPost] = useState<Post>();
  useEffect(() => {
    fetch(`/api/posts/${params.id}`)
      .then((result) => result.json())
      .then((data) => {
        setPost(data);
      });
  }, [post?.id, params.id]);
  const createPostCallback = (post: Post) => {
    fetch(`/api/posts/${params.id}/edit`, {
      method: "POST",
      body: JSON.stringify(post),
    }).then(() => {
      router.push("/blogs");
    });
  };
  return (
    <div>
      <PostEditor callback={createPostCallback} defaultPost={post} confirmButtonText="儲存文章變更" />
    </div>
  );
}