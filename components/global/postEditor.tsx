"use client";

import { useEffect, useRef, useState } from "react";

import { faPlus, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDebounce } from 'use-debounce';

import Textarea from "@/components/global/textarea";
import useOutside from "@/hooks/useOutside";
import validatePost from "@/utils/validatePost";

import Button from "./button";
import Dialog from "./dialog";
import Input from "./input";
import MarkdownRender from "./markdownRender";
import CloseableTagItem from "../edit/closeableTagItem";

export default function PostEditor({
  callback,
  confirmButtonText,
  defaultPost,
}: Readonly<{
  callback: (post: Post) => void;
  confirmButtonText: string;
  defaultPost?: Post;
}>) {
  const [isPublishPanelOpen, setIsPublishPanelOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [postTagsInput, setPostTagsInput] = useState("");
  const publishPanelRef = useRef(null);
  const [dialogMessage, setDialogMessage] = useState("");
  const [post, setPost] = useState<Post>({
    title: "",
    content: "",
    tags: [],
    category: "",
    description: "",
    date: new Date(),
    id: 0,
  });
  const [debouncedContent] = useDebounce(post.content, 500);

  // set default post data if it exists
  useEffect(() => {
    if (defaultPost) {
      setPost(defaultPost);
    }
  }, [defaultPost]);

  const handelCreateButtonClick = () => {
    try {
      validatePost(post);
      callback(post);
  } catch (error) {
      const message = error instanceof Error ? error.message : "發生未知的錯誤";
      setDialogMessage(message);
      setIsDialogOpen(true);
      return;
    }
  };

  // NOTE: when only changing the description, the content will no need to be updated
  // so may there is a better way to update this
  const handelInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  useOutside(publishPanelRef, () => {
    setIsPublishPanelOpen(false);
  });

  const handleAddTag = () => {
    if (postTagsInput && !post.tags.includes(postTagsInput)) {
      setPost({ ...post, tags: [...post.tags, postTagsInput] });
      setPostTagsInput("");
    }
  };

  return (
    <div className="md:p-10 p-4 flex gap-6 h-screen-inner">
      {/* 編輯區塊 */}
      <div
        className={`flex flex-col dark:bg-mirage-900 bg-mirage-200 rounded-xl p-5 transition md:p-6 gap-5 w-full ${
          isPublishPanelOpen ? "opacity-20" : ""
        }`}
      >
        <Input
          value={post.title}
          onChange={handelInputChange}
          name="title"
          type="text"
          className="text-2xl"
          placeholder="輸入標題..."
        />
        <Textarea
          value={post.content}
          onChange={handelInputChange}
          name="content"
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
        <MarkdownRender content={debouncedContent} />
      </div>
      {/* 發布、標籤、類別設定區塊 */}
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
            {post.tags.map((tag) => (
              <CloseableTagItem
                key={tag}
                name={tag}
                onClick={() => {
                  setPost({
                    ...post,
                    tags: post.tags.filter((t) => t !== tag),
                  });
                }}
              />
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
            <Button onClick={() => handleAddTag()}>
              <div className="flex gap-4 justify-center items-center">
                <FontAwesomeIcon icon={faPlus} />
              </div>
            </Button>
          </div>
          <p className="text-xl font-bold">分類</p>
          <Input
            value={post.category}
            onChange={handelInputChange}
            name="category"
            type="text"
            placeholder="輸入類別..."
          />
          <p className="text-xl font-bold">文章簡介</p>
          <Textarea
            value={post.description}
            onChange={handelInputChange}
            name="description"
            className="h-full"
            placeholder="在這裡寫一些關於這篇文章的敘述..."
          />
        </div>
      </div>
      <Dialog
        open={isDialogOpen}
        setOpen={setIsDialogOpen}
        closeByClickOutside={true}
      >
        <div className="flex flex-col items-center gap-4 justify-center">
          <p className="text-xl">{dialogMessage}</p>
          <Button onClick={() => setIsDialogOpen(false)}>好啦==</Button>
        </div>
      </Dialog>
    </div>
  );
}
