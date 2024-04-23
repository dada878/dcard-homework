import Skeleton from "react-loading-skeleton";

import { isAdmin } from "@/actions/auth";
import { getPost } from "@/actions/posts";
import BlogPageFloatingActions from "@/components/blog/blogPageFloatingActions";
import BlogPageSidebar from "@/components/blog/blogPageSidebar";
import Container from "@/components/layout/container";
import Card from "@/components/utilities/card";
import { defaultSEO } from "@/utils/seo";
import "react-loading-skeleton/dist/skeleton.css";

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
  );
}

export default async function BlogPostPage({
  params,
}: Readonly<{
  params: { id: string };
}>) {
  const showActionButtons = await isAdmin();

  return (
    <div className="flex">
      <BlogPageSidebar
        showActionButtons={showActionButtons}
        postID={params.id}
      />

      <MainContentSkeleton />

      <BlogPageFloatingActions
        showActionButtons={showActionButtons}
        postID={params.id}
      />
    </div>
  );
}
