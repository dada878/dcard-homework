import { useState } from "react";
import Button from "@/components/global/button";
import Textarea from "@/components/global/textarea";
import Markdown from "markdown-to-jsx";

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

export default function CommentEditor() {
  const [isPreview, setIsPreview] = useState(false);
  const [content, setContent] = useState("");
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
      <div className="dark:bg-mirage-900 bg-mirage-200 w-full p-4 rounded-b-xl flex gap-4 flex-col">
        <Textarea
          placeholder="在這裡輸入你想對這篇文章說的話..."
          className={`min-h-32 ${isPreview && "hidden"}`}
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <Markdown className={`markdown min-h-32 ${!isPreview && "hidden"}`}>
          {content}
        </Markdown>
        <Button className="w-full">送出留言</Button>
      </div>
    </div>
  );
}
