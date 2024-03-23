"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faAnglesRight,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import Markdown from "markdown-to-jsx";

import Button from "./button";
import Input from "./input";
import Textarea from "@/components/global/textarea";
import { useEffect, useRef, useState } from "react";
import useOutside from "@/utils/hooks/clickOutside";
import { Post } from "@/types/post";
import TagItem from "../blogs/tagItem";

export default function PostEditor({
  callback,
  confirmButtonText,
  defaultPost,
}: {
  callback: (post: Post) => void;
  confirmButtonText: string;
  defaultPost?: Post;
}) {
  const [isPublishPanelOpen, setIsPublishPanelOpen] = useState(false);
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const [postTags, setPostTags] = useState<Array<string>>([]);
  const [postTagsInput, setPostTagsInput] = useState("");
  const [postCategory, setPostCategory] = useState("");
  const [postDescription, setPostDescription] = useState("");
  const publishPanelRef = useRef(null);
  useEffect(() => {
    if (defaultPost) {
      setPostTitle(defaultPost.title);
      setPostContent(defaultPost.content);
      setPostTags(defaultPost.tags);
      setPostCategory(defaultPost.category);
      setPostDescription(defaultPost.description);
    }
  }, [defaultPost]);
  const handelCreateButtonClick = () => {
    callback({
      title: postTitle,
      content: postContent,
      tags: postTags,
      category: postCategory,
      description: postDescription,
      date: new Date(),
      id: 0,
    });
  };
  useOutside(publishPanelRef, () => {
    setIsPublishPanelOpen(false);
  });
  const handleAddTag = () => {
    if (postTagsInput && !postTags.includes(postTagsInput)) {
      setPostTags([...postTags, postTagsInput]);
      setPostTagsInput("");
    }
  };
  return (
    <div className="md:p-10 p-4 flex gap-6 h-[calc(100vh_-_3.6rem)]">
      {/* 編輯區塊 */}
      <div
        className={`flex flex-col dark:bg-mirage-900 bg-mirage-200 rounded-xl p-5 transition md:p-6 gap-5 w-full ${
          isPublishPanelOpen ? "opacity-20" : ""
        }`}
      >
        <Input
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
          type="text"
          className="text-2xl"
          placeholder="輸入標題..."
        />
        <Textarea
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
          className="h-full w-full"
          placeholder="在這裡用 Markdown 來寫一些什麼吧！"
        />
        <Button
          className="md:hidden"
          onClick={() => {
            setIsPublishPanelOpen(true);
          }}
        >
          <div className="flex gap-4 justify-center items-center">
            <FontAwesomeIcon icon={faAnglesRight} />
            <span>下一步</span>
          </div>
        </Button>
      </div>
      {/* 預覽區塊 */}
      <div className="dark:bg-mirage-900 overflow-y-scroll bg-mirage-200 rounded-xl p-6 w-full hidden md:block">
        <Markdown className="markdown">{postContent}</Markdown>
      </div>
      {/* 發布、標籤、類別區塊 */}
      <div
        className={`dark:bg-mirage-900 bg-mirage-200 rounded-xl fixed bottom-0 md:flex-col left-0 right-0 md:relative md:opacity-100 opacity-0 p-6 flex-col-reverse gap-5 md:translate-y-0 min-w-64 transition-all md:flex ${
          isPublishPanelOpen
            ? "flex translate-y-0 opacity-100"
            : "translate-y-full"
        }`}
        ref={publishPanelRef}
      >
        <Button onClick={handelCreateButtonClick}>
          <div className="flex gap-4 justify-center items-center">
            <FontAwesomeIcon icon={faPlus} />
            <span>{confirmButtonText}</span>
          </div>
        </Button>
        <div className="flex flex-col gap-5 flex-1">
          <p className="text-xl font-bold">標籤</p>
          <div className="flex flex-wrap gap-3 empty:hidden">
            {postTags.map((tag) => (
              <TagItem
                key={tag}
                onClick={() => {
                  setPostTags(postTags.filter((t) => t !== tag));
                }}
              >
                <div className="flex justify-center items-center gap-2">
                  <p>{tag}</p>
                  <FontAwesomeIcon icon={faXmark} />
                </div>
              </TagItem>
            ))}
          </div>
          <div className="flex gap-2">
            <Input
              value={postTagsInput}
              onChange={(e) => setPostTagsInput(e.target.value)}
              type="text"
              placeholder="添加標籤..."
              onEnterPress={() => handleAddTag()}
            />
            <Button
              onClick={() => handleAddTag()}
            >
              <div className="flex gap-4 justify-center items-center">
                <FontAwesomeIcon icon={faPlus} />
              </div>
            </Button>
          </div>
          <p className="text-xl font-bold">分類</p>
          <Input
            value={postCategory}
            onChange={(e) => setPostCategory(e.target.value)}
            type="text"
            placeholder="輸入類別..."
          />
          <p className="text-xl font-bold">文章簡介</p>
          <Textarea
            value={postDescription}
            onChange={(e) => setPostDescription(e.target.value)}
            className="h-full"
            placeholder="在這裡寫一些關於這篇文章的敘述..."
          />
        </div>
      </div>
    </div>
  );
}
