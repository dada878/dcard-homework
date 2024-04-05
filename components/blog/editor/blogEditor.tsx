"use client";

import { useEffect, useRef, useState } from "react";

import { faPlus, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDebounce } from "use-debounce";

import Textarea from "@/components/form/textarea";
import Card from "@/components/utilities/card";
import useOutside from "@/hooks/useOutside";
import { cn } from "@/utils/cn";
import validatePost from "@/utils/validatePost";

import TagEditor from "./tagEditor";
import Input from "../../form/input";
import Dialog from "../../modals/dialog";
import Button from "../../utilities/button";
import MarkdownRender from "../../utilities/markdownRender";

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
  const [dialogMessage, setDialogMessage] = useState("");
  const publishPanelRef = useRef(null);
  const [post, setPost] = useState<Post>({
    title: "",
    content: "",
    tags: [],
    category: "",
    description: "",
    date: new Date(),
    id: 0,
  });
  const [debouncedContent] = useDebounce(post.content, 300);

  // set default post data if it exists (for editing post)
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

  const handelInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  // for mobile view, user can close publish panel when click outside
  useOutside(publishPanelRef, () => {
    setIsPublishPanelOpen(false);
  });

  return (
    <div className="flex h-screen-inner gap-6 p-4 md:p-10">
      {/* editor section */}
      <Card
        className={cn(`flex w-full flex-col gap-5 md:p-6`, {
          "opacity-20": isPublishPanelOpen,
        })}
      >
        <Input
          value={post.title}
          onChange={handelInputChange}
          name="title"
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
          <div className="flex items-center justify-center gap-4">
            <FontAwesomeIcon icon={faAnglesRight} />
            <span>下一步</span>
          </div>
        </Button>
      </Card>

      {/* preview section */}
      <Card className="hidden w-full overflow-y-scroll p-5 md:block">
        <MarkdownRender content={debouncedContent} />
      </Card>

      {/* publish tags, categories section */}
      <Card
        className={`fixed bottom-0 left-0 right-0 min-w-64 flex-col-reverse gap-5 rounded-xl bg-mirage-200 p-6 opacity-0 transition-all md:relative md:flex md:translate-y-0 md:flex-col md:opacity-100 dark:bg-mirage-900 ${
          isPublishPanelOpen
            ? "flex translate-y-0 opacity-100"
            : "translate-y-full"
        }`}
        mRef={publishPanelRef}
      >
        <Button onClick={handelCreateButtonClick}>
          <div className="flex items-center justify-center gap-4">
            <FontAwesomeIcon icon={faPlus} />
            <span>{confirmButtonText}</span>
          </div>
        </Button>
        <div className="flex flex-1 flex-col gap-5">
          <p className="text-xl font-bold">標籤</p>
          <TagEditor post={post} setPost={setPost} />
          <p className="text-xl font-bold">分類</p>
          <Input
            value={post.category}
            onChange={handelInputChange}
            name="category"
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
      </Card>
      <Dialog
        open={isDialogOpen}
        setOpen={setIsDialogOpen}
        closeByClickOutside={true}
      >
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-xl">{dialogMessage}</p>
          <Button onClick={() => setIsDialogOpen(false)}>好啦==</Button>
        </div>
      </Dialog>
    </div>
  );
}
