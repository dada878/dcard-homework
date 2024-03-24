"use client";
import { getPost, updatePost } from "@/actions/actions";
import PostEditor from "@/components/global/postEditor";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

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
