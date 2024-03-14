"use client";
import MenuItem from "@/components/blogView/menuItem";
import TagItem from "@/components/blogs/tagItem";
import Button from "@/components/global/button";
import Container from "@/components/global/container";
import FixedSidebar from "@/components/global/fixedSidebar";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Markdown from "react-markdown";

export default function BlogPostPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex">
      <FixedSidebar>
        <Button onClick={() => {}} color="green">
          <div className="flex gap-4 justify-center items-center">
            <FontAwesomeIcon className="w-4" icon={faEdit} />
            <span>編輯文章</span>
          </div>
        </Button>
        <Button onClick={() => {}} color="red">
          <div className="flex gap-4 justify-center items-center">
            <FontAwesomeIcon className="w-4" icon={faTrash} />
            <span>刪除文章</span>
          </div>
        </Button>
        <div className="bg-secondary rounded-xl p-4">
          <h3 className="font-bold text-2xl text-center mb-4">文章目錄</h3>
          <div className="flex flex-col gap-2">
            <MenuItem active>這是子標題ouo</MenuItem>
            <MenuItem>這是子標題ouo</MenuItem>
            <MenuItem>這是子標題ouo</MenuItem>
            <MenuItem>這是子標題ouo</MenuItem>
          </div>
        </div>
      </FixedSidebar>
      <Container>
        <div className="bg-secondary p-10 rounded-xl">
          <h1 className="text-5xl font-bold">超酷的文章標題</h1>
          <div className="flex flex-row items-end justify-between py-4">
            <div className="flex gap-2">
              <TagItem>ouo</TagItem>
              <TagItem>ouo</TagItem>
              <TagItem>ouo</TagItem>
            </div>
            <p className="text-secondary text-sm">2024 / 01 / 22</p>
          </div>
          <hr className="text-secondary-dark py-3"></hr>
          <Markdown className="markdown">
            {`
# Hello World
the cool post 

is here

## This is subtitle

the content ouo
the content ouo
the content ouo
the content ouo
the content ouo
            `}
          </Markdown>
        </div>
      </Container>
    </div>
  );
}
