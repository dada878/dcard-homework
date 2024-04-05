import { startTransition, useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import { getLoginUser } from "@/actions/auth";
import Textarea from "@/components/form/textarea";
import Button from "@/components/utilities/button";
import { cn } from "@/utils/cn";

import MarkdownRender from "../utilities/markdownRender";

function TabButton({
  currentTab,
  setCurrentTab,
  tabId,
  tabName,
}: Readonly<{
  currentTab: string;
  setCurrentTab: (tabId: string) => void;
  tabId: string;
  tabName: string;
}>) {
  return (
    <button
      onClick={() => {
        setCurrentTab(tabId);
      }}
      className={`${
        currentTab === tabId
          ? "bg-mirage-200 dark:bg-mirage-900"
          : "cursor-pointer bg-mirage-300 dark:bg-mirage-800"
      } rounded-t-xl px-6 pb-2 pt-3`}
    >
      {tabName}
    </button>
  );
}

export default function CommentEditor({
  callback,
}: Readonly<{
  callback: (formData: FormData) => Promise<void>;
}>) {
  const [currentTab, setCurrentTab] = useState("edit");
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
      {/* header tabs */}
      <div className="flex w-full justify-start rounded-t-xl bg-mirage-300 dark:bg-mirage-800">
        <TabButton
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
          tabId="edit"
          tabName="編輯"
        />
        <TabButton
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
          tabId="preview"
          tabName="預覽"
        />
      </div>
      {/* preview or editing section */}
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
        {currentTab == "preview" ? (
          <MarkdownRender content={content} className="min-h-32" />
        ) : (
          <Textarea
            placeholder="在這裡輸入你想對這篇文章說的話..."
            className={cn("min-h-32", {
              "cursor-not-allowed": disabled,
            })}
            value={content}
            name="content"
            disabled={disabled}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
        )}
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
