import { Suspense } from "react";

import { notFound } from "next/navigation";
import Skeleton from "react-loading-skeleton";

import { isAdmin } from "@/actions/auth";
import { getPost, getPostComments } from "@/actions/posts";
import BlogContent from "@/components/blog/blogContent";
import BlogPageFloatingActions from "@/components/blog/blogPageFloatingActions";
import BlogPageSidebar from "@/components/blog/blogPageSidebar";
import CommentSection from "@/components/comments/commentSection";
import Container from "@/components/layout/container";
import FixedSidebar from "@/components/layout/fixedSidebar";
import Card from "@/components/utilities/card";
import { defaultSEO } from "@/utils/seo";
import "react-loading-skeleton/dist/skeleton.css";

export default async function BlogPostPage({
  params,
}: Readonly<{
  params: { id: string };
}>) {
  const showActionButtons = await isAdmin();

  return (
    <div className="flex">
      <Suspense fallback={<MainContentSkeleton />}>
        <BlogPageSidebar
          showActionButtons={showActionButtons}
          postID={params.id}
        />
        <MainContent id={params.id} />
      </Suspense>

      <BlogPageFloatingActions
        showActionButtons={showActionButtons}
        postID={params.id}
      />
    </div>
  );
}

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

async function MainContentSkeleton() {
  const baseColor = "#4b5c90";
  const highlightColor = "#778db6";
  const colorProps = { baseColor, highlightColor };
  return (
    <>
      <FixedSidebar>
        <Card className="flex flex-col p-4">
          <h3 className="mb-4 text-center text-2xl font-bold">文章目次</h3>
          <div className="flex flex-col gap-1">
            {Array.from({ length: 4 }).map((_, index) => (
              <Skeleton
                key={index}
                count={1}
                height={20}
                width={Math.random() * 100 + 80}
                {...colorProps}
              />
            ))}
          </div>
        </Card>
      </FixedSidebar>
      <Container className="w-full">
        <Card className="flex flex-col gap-3 p-8">
          <Skeleton count={1} height={50} {...colorProps} className="mb-2" />
          <div className="flex gap-2">
            <Skeleton count={1} width={100} height={30} {...colorProps} />
            <Skeleton count={1} width={100} height={30} {...colorProps} />
          </div>
          <Skeleton count={7} enableAnimation={true} {...colorProps} />
          <Skeleton count={5} enableAnimation={true} {...colorProps} />
        </Card>
      </Container>
    </>
  );
}

async function MainContent({ id }: Readonly<{ id: string }>) {
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
