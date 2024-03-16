"use client";
import { useRouter } from "next/navigation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import Button from "@/components/global/button";
import TagItem from "@/components/blogs/tagItem";
import BlogPost from "@/components/blogs/blogPost";
import Container from "@/components/global/container";
import FixedSidebar from "@/components/global/fixedSidebar";
import CategoryItem from "@/components/blogs/categoryItem";
import FloatingActionSection from "@/components/global/floatingActionSection";

export default function BlogsPage() {
  const router = useRouter();
  return (
    <div>
      <FixedSidebar>
        <Button
          onClick={() => {
            router.push(`/create`);
          }}
        >
          <div className="flex gap-4 justify-center items-center">
            <FontAwesomeIcon className="w-4" icon={faPlus} />
            <span>新增文章</span>
          </div>
        </Button>
        <div className="bg-secondary rounded-2xl p-4 flex flex-col gap-4">
          <h2 className="text-center font-bold text-2xl">分類</h2>
          <div className="flex flex-col">
            <CategoryItem count={12}>React.js</CategoryItem>
            <CategoryItem count={3}>Vue.js</CategoryItem>
            <CategoryItem count={1}>Typescript</CategoryItem>
            <CategoryItem count={7}>其他神奇的文章</CategoryItem>
          </div>
        </div>
        <div className="bg-secondary rounded-2xl p-4 flex flex-col gap-4">
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
        <BlogPost
          title="超酷的文章標題"
          description="這篇文章的敘述將會寫在這裡，是這裡喔。這篇文章的敘述將會寫在這裡，是這裡喔。這篇文章的敘述將會寫在這裡，是這裡喔。這篇文章的敘述將會寫在這裡，是這裡喔。篇文章的敘述將會寫在這裡，是這裡喔。這篇文章的敘述將會寫在這理"
          category="Vue.js"
          tags={["Tag1", "tag2", "ouo"]}
          date={new Date()}
        />
        <BlogPost
          title="超酷的文章標題"
          description="這篇文章的敘述將會寫在這裡，是這裡喔。這篇文章的敘述將會寫在這裡，是這裡喔。這篇文章的敘述將會寫在這裡，是這裡喔。這篇文章的敘述將會寫在這裡，是這裡喔。篇文章的敘述將會寫在這裡，是這裡喔。這篇文章的敘述將會寫在這理"
          category="Vue.js"
          tags={["Tag1", "tag2", "ouo"]}
          date={new Date()}
        />
        <BlogPost
          title="超酷的文章標題"
          description="這篇文章的敘述將會寫在這裡，是這裡喔。這篇文章的敘述將會寫在這裡，是這裡喔。這篇文章的敘述將會寫在這裡，是這裡喔。這篇文章的敘述將會寫在這裡，是這裡喔。篇文章的敘述將會寫在這裡，是這裡喔。這篇文章的敘述將會寫在這理"
          category="Vue.js"
          tags={["Tag1", "tag2", "ouo"]}
          date={new Date()}
        />
        <BlogPost
          title="超酷的文章標題"
          description="這篇文章的敘述將會寫在這裡，是這裡喔。這篇文章的敘述將會寫在這裡，是這裡喔。這篇文章的敘述將會寫在這裡，是這裡喔。這篇文章的敘述將會寫在這裡，是這裡喔。篇文章的敘述將會寫在這裡，是這裡喔。這篇文章的敘述將會寫在這理"
          category="Vue.js"
          tags={["Tag1", "tag2", "ouo"]}
          date={new Date()}
        />
        <BlogPost
          title="超酷的文章標題"
          description="這篇文章的敘述將會寫在這裡，是這裡喔。這篇文章的敘述將會寫在這裡，是這裡喔。這篇文章的敘述將會寫在這裡，是這裡喔。這篇文章的敘述將會寫在這裡，是這裡喔。篇文章的敘述將會寫在這裡，是這裡喔。這篇文章的敘述將會寫在這理"
          category="Vue.js"
          tags={["Tag1", "tag2", "ouo"]}
          date={new Date()}
        />
        <BlogPost
          title="超酷的文章標題"
          description="這篇文章的敘述將會寫在這裡，是這裡喔。這篇文章的敘述將會寫在這裡，是這裡喔。這篇文章的敘述將會寫在這裡，是這裡喔。這篇文章的敘述將會寫在這裡，是這裡喔。篇文章的敘述將會寫在這裡，是這裡喔。這篇文章的敘述將會寫在這理"
          category="Vue.js"
          tags={["Tag1", "tag2", "ouo"]}
          date={new Date()}
        />
      </Container>
      <FloatingActionSection>
        <Button rounded="rounded-full" onClick={() => {
            router.push(`/create`);
          }}>
          <div className="p-2 flex justify-center items-center">
            <FontAwesomeIcon className="w-5 h-7 shadow-lg" icon={faPlus} />
          </div>
        </Button>
      </FloatingActionSection>
    </div>
  );
}
