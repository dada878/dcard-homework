import { startTransition, useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import { getLoginUser } from "@/actions/auth";
import Textarea from "@/components/form/textarea";
import Button from "@/components/utilities/button";

import Card from "../utilities/card";
import MarkdownRender from "../utilities/markdownRender";

function TabButton({
  isPreview,
  setIsPreview,
  isToggleToPreview,
}: Readonly<{
  isPreview: boolean;
  setIsPreview: (isPreview: boolean) => void;
  isToggleToPreview: boolean;
}>) {
  return (
    <button
      onClick={() => {
        setIsPreview(isToggleToPreview);
      }}
      className={`${
        isPreview === isToggleToPreview
          ? "bg-mirage-200 dark:bg-mirage-900"
          : "cursor-pointer bg-mirage-300 dark:bg-mirage-800"
      } rounded-t-xl px-6 pb-2 pt-3`}
    >
      {isToggleToPreview ? "預覽" : "撰寫"}
    </button>
  );
}

export default function CommentEditor({
  postId,
  callback,
}: Readonly<{
  postId: string;
  callback: (formData: FormData) => Promise<void>;
}>) {
  const [isPreview, setIsPreview] = useState(false);
  const [content, setContent] = useState("");
  const [disabled, setDisabled] = useState(false);
  const router = useRouter();

  // check if user is logged in
  useEffect(() => {
    async function checkLogin() {
      const user = await getLoginUser();
      if (!user) {
        setDisabled(true);
      }
    }
    checkLogin();
  });

  return (
    <div className="flex flex-col rounded-xl">
      <div className="flex w-full justify-start rounded-t-xl bg-mirage-300 dark:bg-mirage-800">
        <TabButton
          isPreview={isPreview}
          setIsPreview={setIsPreview}
          isToggleToPreview={false}
        />
        <TabButton
          isPreview={isPreview}
          setIsPreview={setIsPreview}
          isToggleToPreview={true}
        />
      </div>
      <form
        className="flex w-full flex-col gap-4 rounded-b-xl bg-mirage-200 p-4 dark:bg-mirage-900"
        action={async (formData: FormData) => {
          startTransition(() => {
            setContent("");
          });
          startTransition(() => {
            callback(formData);
          });
        }}
      >
        <Textarea
          placeholder="在這裡輸入你想對這篇文章說的話..."
          className={`min-h-32 ${isPreview && "hidden"} ${
            disabled && "cursor-not-allowed"
          }`}
          value={content}
          name="content"
          disabled={disabled}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <MarkdownRender
          content={content}
          className={`min-h-32 ${!isPreview && "hidden"}`}
        />
        <Button
          className="w-full"
          type={disabled ? "button" : "submit"}
          onClick={() => {
            disabled && router.push("/api/auth/signin");
          }}
        >
          {disabled ? "留言前請先登入" : "送出留言"}
        </Button>
      </form>
    </div>
  );
}