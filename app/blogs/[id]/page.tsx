import { Metadata } from "next";

import { getPostComments, getPost } from "@/actions/posts";
import { isOwner } from "@/actions/auth";
import Container from "@/components/layout/container";
import ContentRender from "@/components/blogView/contentRender";
import CommentSection from "@/components/blogView/commentSection";
import BlogPageSidebar from "@/components/blogView/blogPageSidebar";
import BlogPageFloatingActions from "@/components/blogView/blogPageFloatingActions";
import { defaultSEO } from "@/utils/seo";

export async function generateMetadata({ params }: { params: { id: string } }) {
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
}: {
  params: { id: string };
}) {
  const [post, comments, showActionButtons] = await Promise.all([
    getPost(params.id),
    getPostComments(params.id),
    isOwner()
  ]);
  return (
    <div className="flex">
      <BlogPageSidebar showActionButtons={showActionButtons} postID={params.id} />
      <Container width="w-full">
        {post && <ContentRender post={post} />}
        <CommentSection comments={comments} postId={params.id} />
      </Container>
      <BlogPageFloatingActions showActionButtons={showActionButtons} postID={params.id} />
    </div>
  );
}
