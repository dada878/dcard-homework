"use client";
import { useRouter } from "next/navigation";

import MenuItem from "@/components/blogView/menuItem";
import TagItem from "@/components/blogs/tagItem";
import Button from "@/components/global/button";
import Container from "@/components/global/container";
import FixedSidebar from "@/components/global/fixedSidebar";
import Comment from "@/components/blogView/comment";

import Markdown from "react-markdown";
import { faEdit, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FloatingActionSection from "@/components/global/floatingActionSection";
import CommentEditor from "@/components/blogView/commentEditor";

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  return (
    <div className="flex">
      <FixedSidebar>
        <Button
          onClick={() => {
            router.push(`/blogs/${params.id}/edit`);
          }}
          color="green"
        >
          <div className="flex gap-4 justify-center items-center">
            <FontAwesomeIcon className="w-4" icon={faEdit} />
            <span>編輯文章</span>
          </div>
        </Button>
        <Button onClick={() => {}} color="red">
          <div className="flex gap-4 justify-center items-center">
            <FontAwesomeIcon className="w-4" icon={faTrashCan} />
            <span>刪除文章</span>
          </div>
        </Button>
        <div className="bg-mirage-900 rounded-xl p-4">
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
        <div className="bg-mirage-900 p-6 md:p-8 rounded-xl">
          <h1 className="text-5xl font-bold">超酷的文章標題</h1>
          <div className="flex flex-row items-end justify-between py-4">
            <div className="flex gap-2">
              <TagItem>ouo</TagItem>
              <TagItem>ouo</TagItem>
              <TagItem>ouo</TagItem>
            </div>
            <p className="text-secondary text-sm">2024 / 01 / 22</p>
          </div>
          <hr className="text-secondary-dark py-3" />
          <main className="markdown">
            <Markdown>
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

# Hello World
the cool post 

is here

## This is subtitle

the content ouo
the content ouo
the content ouo
the content ouo
the content ouo

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
          </main>
        </div>
        <Comment
          userName="超酷的使用者"
          avatarUrl="/images/placeholders/avatar.png"
          date={new Date()}
        >
          <Markdown>這真的是超酷的留言 ouob</Markdown>
        </Comment>
        <Comment
          userName="超酷的使用者"
          avatarUrl="/images/placeholders/avatar.png"
          date={new Date()}
        >
          <Markdown>這真的是超酷的留言 ouob</Markdown>
        </Comment>
        <Comment
          userName="超酷的使用者"
          avatarUrl="/images/placeholders/avatar.png"
          date={new Date()}
        >
          <Markdown>這真的是超酷的留言 ouob</Markdown>
        </Comment>
        <CommentEditor />
      </Container>
      <FloatingActionSection>
        <Button rounded="rounded-full" color="green" onClick={() => {
            router.push(`/blogs/${params.id}/edit`);
          }}>
          <div className="p-2">
            <FontAwesomeIcon className="w-5 h-5 shadow-lg" icon={faEdit} />
          </div>
        </Button>
        <Button rounded="rounded-full" onClick={() => {}} color="red">
          <div className="p-2">
            <FontAwesomeIcon className="w-5 h-5 shadow-lg" icon={faTrashCan} />
          </div>
        </Button>
      </FloatingActionSection>
    </div>
  );
}
