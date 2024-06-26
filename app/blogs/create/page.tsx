"use client";

import { startTransition, useState } from "react";

import { useRouter } from "next/navigation";

import { createPost } from "@/actions/posts";
import PostEditor from "@/components/blog/editor/blogEditor";
import Dialog from "@/components/modals/dialog";
import Button from "@/components/utilities/button";
import useAdminOnly from "@/hooks/useAdminOnly";

export default function CreatePage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [postStatus, setPostStatus] = useState<string>("pending");
  const [postUrl, setPostUrl] = useState("");
  const [errorMessages, setErrorMessages] = useState<string>("");
  const router = useRouter();

  useAdminOnly();

  const createPostCallback = async (post: Post) => {
    setIsDialogOpen(true);
    createPost(post)
      .then((id) => {
        setPostStatus("success");
        setPostUrl(`/blogs/${id}`);
      })
      .catch((error) => {
        setPostStatus("error");
        setErrorMessages(error.message);
      });
  };

  function renderDialogContents() {
    switch (postStatus) {
      case "pending":
        return <p>正在發布文章...</p>;
      case "success":
        return (
          <div className="flex flex-col gap-5">
            <p className="text-xl">文章發布成功！</p>
            <div className="text-md flex justify-center gap-3">
              <Button onClick={() => router.push(postUrl)}>查看文章</Button>
              <Button
                onClick={() => {
                  router.push("/blogs");
                }}
              >
                返回部落格頁面
              </Button>
            </div>
          </div>
        );
      case "error":
        return (
          <div className="text-md flex flex-col justify-center gap-5">
            <p className="text-md text-red-500 text-xl">{errorMessages}</p>
            <Button
              onClick={() => {
                setIsDialogOpen(false);
              }}
            >
              關閉
            </Button>
          </div>
        );
    }
  }

  return (
    <>
      <PostEditor
        callback={createPostCallback}
        confirmButtonText="確認發布文章"
      />
      <Dialog
        open={isDialogOpen}
        setOpen={setIsDialogOpen}
        closeByClickOutside={false}
      >
        {renderDialogContents()}
      </Dialog>
    </>
  );
}
