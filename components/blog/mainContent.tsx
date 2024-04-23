import { notFound } from "next/navigation";

import { getPost, getPostComments } from "@/actions/posts";
import BlogContent from "@/components/blog/blogContent";
import CommentSection from "@/components/comments/commentSection";
import Container from "@/components/layout/container";
import "react-loading-skeleton/dist/skeleton.css";

export async function MainContent({ id }: Readonly<{ id: string }>) {
  const [post, comments] = await Promise.all([
    getPost(id),
    getPostComments(id),
  ]).catch(() => {
    notFound();
  });

  return (
    <Container className="w-full">
      {post && <BlogContent post={post} />}
      <CommentSection comments={comments} postId={id} />
    </Container>
  );
}
