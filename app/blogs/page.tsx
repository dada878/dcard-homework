import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import Button from "@/components/global/button";
import TagItem from "@/components/global/tagItem";
import BlogPost from "@/components/blogs/blogPost";
import Container from "@/components/layout/container";
import FixedSidebar from "@/components/layout/fixedSidebar";
import CategoryItem from "@/components/blogs/categoryItem";
import FloatingActionSection from "@/components/layout/floatingActionSection";
import LinkButton from "@/components/global/linkButton";
import { unstable_noStore as noStore } from "next/cache";
import { getPostList } from "../../actions/posts";
import { getTagList } from "@/actions/tags";
import Pagination from "@/components/blogs/pagination";
import { getCategoryList } from "@/actions/categories";
import TogglableTagItem from "@/components/blogs/togglableTagItem";

async function Posts({ page }: { page?: string }) {
  const posts: Array<Post> = await getPostList(page);
  return (
    <>
      {posts.map((post: Post) => {
        return (
          <BlogPost
            id={post.id}
            key={post.id}
            title={post.title}
            description={post.content}
            category={post.category}
            tags={post.tags}
            date={new Date(post.date)}
          />
        );
      })}
    </>
  );
}

async function Categories() {
  const categories = await getCategoryList();
  return (
    <div className="flex flex-col gap-3">
      {categories
        .filter((category: string) => category.length)
        .map((category: string) => (
          <CategoryItem key={category} name={category} />
        ))}
    </div>
  );
}

async function Tags({ currentTags }: { currentTags?: string[] }) {
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

export default function BlogsPage({
  params,
  searchParams,
}: {
  params: {};
  searchParams: { tags?: string; category?: string; page?: string };
}) {
  noStore();
  const tagList = searchParams.tags?.split(",") || [];
  const category = searchParams.category || "";
  return (
    <div>
      <FixedSidebar>
        <LinkButton href="/blogs/create">
          <div className="flex gap-4 justify-center items-center">
            <FontAwesomeIcon className="w-4" icon={faPlus} />
            <span>新增文章</span>
          </div>
        </LinkButton>
        <div className="dark:bg-mirage-900 rounded-2xl p-4 flex bg-mirage-200 flex-col gap-4">
          <h2 className="text-center font-bold text-2xl">分類</h2>
          <div className="flex flex-col">
            <Categories />
          </div>
        </div>
        <div className="dark:bg-mirage-900 rounded-2xl p-4 bg-mirage-200 flex flex-col gap-4">
          <h2 className="text-center font-bold text-2xl">標籤</h2>
          <div className="flex flex-row flex-wrap gap-2">
            <Tags currentTags={tagList} />
          </div>
        </div>
      </FixedSidebar>
      <Container>
        <div className="flex gap-3 md:hidden">
          <div className="flex gap-4 items-center overflow-x-scroll">
            <Button>React.js</Button>
            <Button>Vue.js</Button>
            <Button>Typescript</Button>
            <Button>Typescript</Button>
            <Button>Typescript</Button>
          </div>
        </div>
        <Posts page={searchParams.page} />
        <Pagination page={searchParams.page || "1"} />
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
