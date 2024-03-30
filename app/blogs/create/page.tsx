"use client";

import { startTransition, useState } from "react";

import { useRouter } from "next/navigation";

import { createPost } from "@/actions/posts";
import Button from "@/components/global/button";
import Dialog from "@/components/global/dialog";
import PostEditor from "@/components/global/postEditor";

export default function CreatePage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [postStatus, setPostStatus] = useState<string>("pending");
  const [postUrl, setPostUrl] = useState("");
  const [errorMessages, setErrorMessages] = useState<string>("");
  const router = useRouter();

  const createPostCallback = async (post: Post) => {
    setIsDialogOpen(true);
    createPost(post)
      .then((id) => {
        setPostStatus("success");
        setPostUrl(`/blogs/${id}`);
      })
      .catch((error) => {
        console.error(error);
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
            <div className="flex gap-3 text-md justify-center">
              <Button onClick={() => router.push(postUrl)}>查看文章</Button>
              <Button
                onClick={() => {
                  startTransition(() => router.push("/blogs"));
                  startTransition(() => router.refresh());
                }}
              >
                返回部落格頁面
              </Button>
            </div>
          </div>
        );
      case "error":
        return (
          <div className="flex gap-5 flex-col text-md justify-center">
            <p className="text-md text-xl text-red-500">{errorMessages}</p>
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
