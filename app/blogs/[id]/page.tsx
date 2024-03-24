import MenuItem from "@/components/blogView/menuItem";
import Container from "@/components/layout/container";
import FixedSidebar from "@/components/layout/fixedSidebar";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Suspense } from "react";
import LinkButton from "@/components/global/linkButton";
import ContentRender from "@/components/blogView/contentRender";
import FloatingActionSection from "@/components/layout/floatingActionSection";
import Markdown from "markdown-to-jsx";
import BlogComment from "@/components/blogView/comment";
import DeleteButtonClient from "../../../components/blogView/deleteButtonClient";
import CommentEditorClient from "../../../components/blogView/commentEditorClient";
import { getPostComments, getPost } from "@/actions/posts";

export default async function BlogPostPage({
  params,
}: {
  params: { id: string };
}) {
  const post = await getPost(params.id);
  const comments = await getPostComments(params.id);
  return (
    <div className="flex">
      <FixedSidebar>
        <LinkButton href={`/blogs/${params.id}/edit`}>
          <div className="flex gap-4 justify-center items-center">
            <FontAwesomeIcon className="w-4" icon={faEdit} />
            <span>編輯文章</span>
          </div>
        </LinkButton>
        <DeleteButtonClient id={params.id} />
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
      <Container width="w-full">
        {post && <ContentRender post={post} />}
        {comments.map((comment: Comment, i: number) => (
          <BlogComment
            key={i}
            userName={comment.author}
            avatarUrl={comment.avatar}
            date={new Date(comment.date)}
          >
            <Markdown>{comment.content}</Markdown>
          </BlogComment>
        ))}
        <Suspense fallback={<div>Loading...</div>}>
          <CommentEditorClient />
        </Suspense>
      </Container>
      <FloatingActionSection>
        <LinkButton href={`/blogs/${params.id}/edit`} rounded="rounded-full">
          <div className="p-2">
            <FontAwesomeIcon className="w-5 h-5 shadow-lg" icon={faEdit} />
          </div>
        </LinkButton>
        <DeleteButtonClient id={params.id} isMobile />
      </FloatingActionSection>
    </div>
  );
}
