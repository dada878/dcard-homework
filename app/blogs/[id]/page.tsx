import { notFound } from "next/navigation";

import { isOwner } from "@/actions/auth";
import { getPost, getPostComments } from "@/actions/posts";
import BlogContent from "@/components/blog/blogContent";
import BlogPageFloatingActions from "@/components/blog/blogPageFloatingActions";
import BlogPageSidebar from "@/components/blog/blogPageSidebar";
import CommentSection from "@/components/comments/commentSection";
import Container from "@/components/layout/container";
import { defaultSEO } from "@/utils/seo";

export async function generateMetadata({
  params,
}: Readonly<{ params: { id: string } }>) {
  const post = await getPost(params.id);

  const defaultConfig = defaultSEO({
    title: post.title,
    description: post.description,
    url: `/blogs/${params.id}`,
  });

  const metadata = {
    ...defaultConfig,
    keywords: post.tags.join(", "),
    openGraph: {
      ...defaultConfig.openGraph,
      type: "article",
      publishedTime: post.date.toISOString(),
    },
  };
  return metadata;
}

export default async function BlogPostPage({
  params,
}: Readonly<{
  params: { id: string };
}>) {
  const [post, comments, showActionButtons] = await Promise.all([
    getPost(params.id),
    getPostComments(params.id),
    isOwner(),
  ]).catch(() => {
    notFound();
  });

  return (
    <div className="flex">
      <BlogPageSidebar
        showActionButtons={showActionButtons}
        postID={params.id}
      />

      <Container className="w-full">
        {post && <BlogContent post={post} />}
        <CommentSection comments={comments} postId={params.id} />
      </Container>

      <BlogPageFloatingActions
        showActionButtons={showActionButtons}
        postID={params.id}
      />
    </div>
  );
}
