import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Metadata } from "next";

import { isOwner } from "@/actions/auth";
import { getCategoryList } from "@/actions/categories";
import { getTagList } from "@/actions/tags";
import CategoryItem from "@/components/blogs/categoryItem";
import PostListRenderClient from "@/components/blogs/postListRenderClient";
import TogglableTagItem from "@/components/blogs/togglableTagItem";
import Button from "@/components/global/button";
import LinkButton from "@/components/global/linkButton";
import Container from "@/components/layout/container";
import FixedSidebar from "@/components/layout/fixedSidebar";
import FloatingActionSection from "@/components/layout/floatingActionSection";
import { defaultSEO } from "@/utils/seo";

export const metadata: Metadata = defaultSEO({
  title: "文章列表",
  url: "/blogs",
  description: "在這裡查看我超酷的文章們！",
});

async function Categories({ mobileMode }: Readonly<{ mobileMode?: boolean }>) {
  const categories = await getCategoryList();
  return (
    <div
      className={`flex ${
        mobileMode ? "gap-4 items-center overflow-x-scroll" : "flex-col gap-3"
      }`}
    >
      <CategoryItem name="全部" />
      {categories.map((category: string) => (
        <CategoryItem key={category} name={category} />
      ))}
    </div>
  );
}

async function Tags({ currentTags }: Readonly<{ currentTags?: string[] }>) {
  const tags = await getTagList();
  return (
    <>
      {tags.map((tag: string) => (
        <TogglableTagItem
          key={tag}
          selected={currentTags?.includes(tag)}
          name={tag}
        />
      ))}
    </>
  );
}

export default async function BlogsPage({
  searchParams,
}: {
  searchParams: Readonly<{ tags?: string; category?: string }>;
}) {
  const tags = (searchParams.tags?.split(",") ?? []).filter(
    (tag) => tag.length
  );
  const showNewPostButton = await isOwner();
  const category = searchParams.category ?? undefined;
  const currentQuery = {
    tags: tags,
    category: category,
  };
  return (
    <div>
      <FixedSidebar>
        {showNewPostButton && (
          <LinkButton href="/blogs/create">
            <div className="flex gap-4 justify-center items-center">
              <FontAwesomeIcon className="w-4" icon={faPlus} />
              <span>新增文章</span>
            </div>
          </LinkButton>
        )}
        <div className="dark:bg-mirage-900 rounded-2xl p-4 flex bg-mirage-200 flex-col gap-4">
          <h2 className="text-center font-bold text-2xl">分類</h2>
          <div className="flex flex-col">
            <Categories />
          </div>
        </div>
        <div className="dark:bg-mirage-900 rounded-2xl p-4 bg-mirage-200 flex flex-col gap-4">
          <h2 className="text-center font-bold text-2xl">標籤</h2>
          <div className="flex flex-row flex-wrap gap-2">
            <Tags currentTags={tags} />
          </div>
        </div>
      </FixedSidebar>
      <Container>
        <div className="flex gap-3 md:hidden">
          <div className="flex gap-4 items-center overflow-x-scroll">
            <Categories mobileMode={true} />
          </div>
        </div>
        <PostListRenderClient query={currentQuery} />
      </Container>
      <FloatingActionSection>
        <LinkButton href="/blogs/create" rounded="rounded-full">
          <div className="p-2">
            <FontAwesomeIcon className="w-5 h-5 shadow-lg" icon={faPlus} />
          </div>
        </LinkButton>
      </FloatingActionSection>
    </div>
  );
}
