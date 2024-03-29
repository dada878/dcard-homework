import { Metadata } from "next";

import { getPostComments, getPost } from "@/actions/posts";
import { isOwner } from "@/actions/auth";
import Container from "@/components/layout/container";
import ContentRender from "@/components/blogView/contentRender";
import CommentSection from "@/components/blogView/commentSection";
import { openGraphImages, siteName } from "@/utils/sharedMetadata";
import BlogPageSidebar from "@/components/blogView/blogPageSidebar";
import BlogPageFloatingActions from "@/components/blogView/blogPageFloatingActions";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const post = await getPost(params.id);
  const metadata : Metadata = {
    title: `${post.title} | ${siteName}`,
    description: post.description,
    keywords: post.tags.join(", "),
    openGraph: {
      title: `${post.title} | ${siteName}`,
      images: openGraphImages,
      description: post.description,
      url: `${process.env.PRODUCTION_URL}/blogs/${params.id}`,
      siteName: siteName,
      type: "article",
      publishedTime: post.date.toString(),
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
