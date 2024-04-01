import { notFound } from "next/navigation";

import { isOwner } from "@/actions/auth";
import { getPost, getPostComments } from "@/actions/posts";
import BlogPageFloatingActions from "@/components/blogView/blogPageFloatingActions";
import BlogPageSidebar from "@/components/blogView/blogPageSidebar";
import CommentSection from "@/components/blogView/commentSection";
import ContentRender from "@/components/blogView/contentRender";
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
  ]).catch((error) => {
    notFound();
  });

  return (
    <div className="flex">
      <BlogPageSidebar
        showActionButtons={showActionButtons}
        postID={params.id}
      />
      <Container className="w-full">
        {post && <ContentRender post={post} />}
        <CommentSection comments={comments} postId={params.id} />
      </Container>
      <BlogPageFloatingActions
        showActionButtons={showActionButtons}
        postID={params.id}
      />
    </div>
  );
}
