"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Button from "./button";
import Markdown from "react-markdown";

export default function PostEditor() {
  return (
    <div className="p-10 flex gap-6 h-[calc(100vh_-_3.6rem)]">
      <div className="flex flex-col bg-secondary rounded-xl p-6 gap-6 w-full">
        <input
          type="text"
          className="text-2xl bg-light p-3 w-full rounded-lg outline-none"
          placeholder="輸入標題..."
        />
        <textarea
          className="bg-light p-3 resize-none h-full w-full rounded-lg outline-none"
          placeholder="在這裡用 Markdown 來寫一些什麼吧！"
        />
      </div>
      <div className="bg-secondary rounded-xl p-6 w-full">
        <Markdown className="markdown"></Markdown>
      </div>
      <div className="bg-secondary rounded-xl p-6 flex flex-col gap-5 min-w-64">
        <Button onClick={() => {}}>
          <div className="flex gap-4 justify-center items-center">
            <FontAwesomeIcon icon={faPlus} />
            <span>確認發布文章</span>
          </div>
        </Button>
        <p className="text-xl">標籤</p>
        <div className="flex gap-2">
          <input
            type="text"
            className="bg-light p-3 w-full rounded-lg outline-none"
            placeholder="添加標籤..."
          />
          <Button onClick={() => {}}>
            <div className="flex gap-4 justify-center items-center">
              <FontAwesomeIcon icon={faPlus} />
            </div>
          </Button>
        </div>
        <p className="text-xl">分類</p>
        <input
          type="text"
          className="bg-light p-3 w-full rounded-lg outline-none"
          placeholder="輸入類別..."
        />
        <p className="text-xl">文章簡介</p>
        <textarea
          className="bg-light p-3 w-full h-full rounded-lg resize-none outline-none"
          placeholder="在這裡寫一些關於這篇文章的敘述..."
        />
      </div>
    </div>
  );
}
