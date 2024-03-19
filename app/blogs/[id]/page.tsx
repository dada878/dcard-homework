"use client";
import { useRouter } from "next/navigation";

import MenuItem from "@/components/blogView/menuItem";
import TagItem from "@/components/blogs/tagItem";
import Button from "@/components/global/button";
import Container from "@/components/global/container";
import FixedSidebar from "@/components/global/fixedSidebar";
import BlogComment from "@/components/blogView/comment";

import Markdown from "react-markdown";
import { faEdit, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FloatingActionSection from "@/components/global/floatingActionSection";
import CommentEditor from "@/components/blogView/commentEditor";
import { useEffect, useState } from "react";
import { Post } from "@/types/post";
import { formatDate } from "@/utils/dateFormatter";
import { Comment } from "@/types/comment";

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [post, setPost] = useState<Post>();
  const [comments, setComments] = useState<Array<Comment>>([]);
  useEffect(() => {
    fetch(`/api/posts/${params.id}`)
      .then((result) => result.json())
      .then((data) => {
        setPost(data);
      });
    fetch(`/api/posts/${params.id}/comments`)
      .then((result) => result.json())
      .then((data) => {
        setComments(data);
      });
  }, [params.id]);
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
        <div className="dark:bg-mirage-900 bg-mirage-200 rounded-xl p-4">
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
        <div className="dark:bg-mirage-900 bg-mirage-200 p-6 md:p-8 rounded-xl">
          <h1 className="text-5xl font-bold">{post?.title}</h1>
          <div className="flex flex-row items-end justify-between py-4">
            <div className="flex gap-2">
              {post?.tags.map((tag, i) => (
                <TagItem key={i}>{tag}</TagItem>
              ))}
            </div>
            {post && (
              <p className="dark:text-secondary text-secondary-light text-sm">
                {formatDate(new Date(post.date))}
              </p>
            )}
          </div>
          <hr className="text-secondary-dark py-3" />
          <main className="markdown">
            <Markdown>{post?.content}</Markdown>
          </main>
        </div>
        {
          comments.map((comment : Comment, i) => (
            <BlogComment
              key={i}
              userName={comment.author}
              avatarUrl={comment.avatar}
              date={new Date(comment.date)}
            >
              <Markdown>{comment.content}</Markdown>
            </BlogComment>
          ))
        }
        <CommentEditor />
      </Container>
      <FloatingActionSection>
        <Button
          rounded="rounded-full"
          color="green"
          onClick={() => {
            router.push(`/blogs/${params.id}/edit`);
          }}
        >
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
