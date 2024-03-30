import { startTransition, useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import { getLoginUser } from "@/actions/auth";
import Button from "@/components/global/button";
import Textarea from "@/components/global/textarea";

import MarkdownRender from "../global/markdownRender";

function TabButton({
  isPreview,
  setIsPreview,
  isToggleToPreview,
}: {
  isPreview: boolean;
  setIsPreview: (isPreview: boolean) => void;
  isToggleToPreview: boolean;
}) {
  return (
    <p
      onClick={() => {
        setIsPreview(isToggleToPreview);
      }}
      className={`${
        isPreview === isToggleToPreview
          ? "dark:bg-mirage-900 bg-mirage-200"
          : "dark:bg-mirage-800 bg-mirage-300 cursor-pointer"
      } px-6 pt-3 pb-2 rounded-t-xl`}
    >
      {isToggleToPreview ? "預覽" : "撰寫"}
    </p>
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
      <div className="dark:bg-mirage-800 bg-mirage-300 flex justify-start w-full rounded-t-xl">
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
        className="dark:bg-mirage-900 bg-mirage-200 w-full p-4 rounded-b-xl flex gap-4 flex-col"
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
