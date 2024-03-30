"use client";
import { startTransition, useState } from "react";
import { useRouter } from "next/navigation";

import { createPost } from "@/actions/posts";
import Button from "@/components/global/button";
import Dialog from "@/components/global/dialog";
import PostEditor from "@/components/global/postEditor";
import { defaultSEO } from "@/utils/seo";

export const metadata = defaultSEO({
  noindex: true,
  title: "發布文章",
  description: "在這裡撰寫並發布超酷的文章！",
});

export default function CreatePage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [postUrl, setPostUrl] = useState("");
  const router = useRouter();
  const createPostCallback = (post: Post) => {
    setIsDialogOpen(true);
    createPost(post).then((id) => {
      setPostUrl(`/blogs/${id}`);
      setIsFinished(true);
    });
  };
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
        <div className="text-center">
          {isFinished ? (
            <div className="flex flex-col gap-5">
              <p className="text-xl">文章發布成功！</p>
              <div className="flex gap-3 text-md justify-center">
                <Button onClick={() => router.push(postUrl)}>查看文章</Button>
                <Button onClick={
                  () => {
                    startTransition(() => router.push("/blogs"));
                    startTransition(() => router.refresh());
                  }
                }>
                  返回部落格頁面
                </Button>
              </div>
            </div>
          ) : (
            <p className="text-xl">發布中...</p>
          )}
        </div>
      </Dialog>
    </>
  );
}
