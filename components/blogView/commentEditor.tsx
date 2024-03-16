import { useState } from "react";
import Button from "../global/button";
import Textarea from "../global/textarea";
import Markdown from "react-markdown";

export default function CommentEditor() {
  const [isPreview, setIsPreview] = useState(false);
  return (
    <div className="flex flex-col rounded-xl">
      <div className="bg-middle flex justify-start w-full rounded-t-xl">
        <p onClick={
          () => {
            setIsPreview(false);
          }
        } className={`${isPreview ? "bg-middle cursor-pointer" : "bg-secondary"} px-6 pt-3 pb-2 rounded-t-xl`}>撰寫</p>
        <p onClick={
          () => {
            setIsPreview(true);
          }
        } className={`${isPreview ? "bg-secondary" : "bg-middle cursor-pointer"} px-6 pt-3 pb-2 transition rounded-t-xl hover:text-secondary`}>預覽</p>
      </div>
      <div className="bg-secondary w-full p-4 rounded-b-xl flex gap-4 flex-col">
        <Textarea
          placeholder="在這裡輸入你想對這篇文章說的話..."
          className={`min-h-32 ${isPreview && "hidden"}`}
        />
        <Markdown className={`markdown min-h-32 ${!isPreview && "hidden"}`}></Markdown>
        <Button className="w-full">送出留言</Button>
      </div>
    </div>
  );
}
