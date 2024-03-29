import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { getPostComments, getPost } from "@/actions/posts";
import { isOwner } from "@/actions/auth";
import Container from "@/components/layout/container";
import LinkButton from "@/components/global/linkButton";
import FixedSidebar from "@/components/layout/fixedSidebar";
import ContentRender from "@/components/blogView/contentRender";
import CommentSection from "@/components/blogView/commentSection";
import DeleteButtonClient from "@/components/blogView/deleteButtonClient";
import TableOfContentClient from "@/components/global/tableOfContentClient";
import FloatingActionSection from "@/components/layout/floatingActionSection";
import { openGraphImages, siteName } from "@/utils/sharedMetadata";
import { Metadata } from "next";

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
      <FixedSidebar>
        {showActionButtons && (
          <>
            <LinkButton href={`/blogs/${params.id}/edit`}>
              <div className="flex gap-4 justify-center items-center">
                <FontAwesomeIcon className="w-4" icon={faEdit} />
                <span>編輯文章</span>
              </div>
            </LinkButton>
            <DeleteButtonClient id={params.id} />
          </>
        )}
        <TableOfContentClient selector="h1" />
      </FixedSidebar>
      <Container width="w-full">
        {post && <ContentRender post={post} />}
        <CommentSection comments={comments} postId={params.id} />
      </Container>
      {showActionButtons && (
        <FloatingActionSection>
          <LinkButton href={`/blogs/${params.id}/edit`} rounded="rounded-full">
            <div className="p-2">
              <FontAwesomeIcon className="w-5 h-5 shadow-lg" icon={faEdit} />
            </div>
          </LinkButton>
          <DeleteButtonClient id={params.id} isMobile />
        </FloatingActionSection>
      )}
    </div>
  );
}
