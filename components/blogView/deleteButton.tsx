"use client";

import { startTransition, useState } from "react";

import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

import { deletePost } from "@/actions/posts";
import Button from "@/components/global/button";
import ConfirmDialog from "@/components/global/confirmDialog";

export default function DeleteButton({
  id,
  isMobile = false,
}: {
  id: string;
  isMobile?: boolean;
}) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const router = useRouter();
  return (
    <>
      <Button
        rounded={isMobile ? "rounded-full" : "rounded-xl"}
        onClick={() => {
          setIsDialogOpen(true);
        }}
      >
        <div className="flex gap-4 justify-center items-center">
          {isMobile ? (
            <div className="p-2">
              <FontAwesomeIcon
                className="w-5 h-5 shadow-lg"
                icon={faTrashCan}
              />
            </div>
          ) : (
            <>
              <FontAwesomeIcon className="w-4" icon={faTrashCan} />
              <span>刪除文章</span>
            </>
          )}
        </div>
      </Button>
      <ConfirmDialog
        open={isDialogOpen}
        setOpen={setIsDialogOpen}
        onConfirm={() => {
          deletePost(id).then(() => {
            startTransition(() => router.push("/blogs"));
            startTransition(() => router.refresh());
          });
        }}
        title="確定要刪除文章嗎？"
      />
    </>
  );
}
