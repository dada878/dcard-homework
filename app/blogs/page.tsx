import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import { Post } from "@/types/post";

import Button from "@/components/global/button";
import TagItem from "@/components/blogs/tagItem";
import BlogPost from "@/components/blogs/blogPost";
import Container from "@/components/global/container";
import FixedSidebar from "@/components/global/fixedSidebar";
import CategoryItem from "@/components/blogs/categoryItem";
import FloatingActionSection from "@/components/global/floatingActionSection";
import LinkButton from "@/components/global/linkButton";

export default async function BlogsPage() {
  const posts : Array<Post> = await fetch("http://localhost:3000/api/posts").then((result) =>
    result.json()
  );
  return (
    <div>
      <FixedSidebar>
        <LinkButton href="/create">
          <div className="flex gap-4 justify-center items-center">
            <FontAwesomeIcon className="w-4" icon={faPlus} />
            <span>新增文章</span>
          </div>
        </LinkButton>
        <div className="dark:bg-mirage-900 rounded-2xl p-4 flex bg-mirage-200 flex-col gap-4">
          <h2 className="text-center font-bold text-2xl">分類</h2>
          <div className="flex flex-col">
            <CategoryItem count={12}>React.js</CategoryItem>
            <CategoryItem count={3}>Vue.js</CategoryItem>
            <CategoryItem count={1}>Typescript</CategoryItem>
            <CategoryItem count={7}>其他神奇的文章</CategoryItem>
          </div>
        </div>
        <div className="dark:bg-mirage-900 rounded-2xl p-4 bg-mirage-200 flex flex-col gap-4">
          <h2 className="text-center font-bold text-2xl">標籤</h2>
          <div className="flex flex-row flex-wrap gap-2">
            <TagItem>Tag 1</TagItem>
            <TagItem>Tag 2</TagItem>
            <TagItem>The Tag 3</TagItem>
            <TagItem>Best Tag</TagItem>
            <TagItem>awa</TagItem>
            <TagItem>Last Tag</TagItem>
            <TagItem>Tag</TagItem>
            <TagItem>More Tag</TagItem>
            <TagItem>ouo</TagItem>
            <TagItem>Cool Tag</TagItem>
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
        {posts.map((post: Post, i: number) => {
          return (
            <BlogPost
              id={post.id}
              key={i}
              title={post.title}
              description={post.content}
              category={post.category}
              tags={post.tags}
              date={new Date(post.date)}
            />
          );
        })}
      </Container>
      <FloatingActionSection>
        <LinkButton href="/create" rounded="rounded-full">
          <div className="p-2 flex justify-center items-center">
            <FontAwesomeIcon className="w-5 h-7 shadow-lg" icon={faPlus} />
          </div>
        </LinkButton>
      </FloatingActionSection>
    </div>
  );
}
