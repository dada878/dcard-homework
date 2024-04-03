import Link from "next/link";

import TagItem from "@/components/global/tagItem";
import { formatDate } from "@/utils/dateFormatter";

export default function BlogPost({ post }: Readonly<{ post: Post }>) {
  return (
    <Link href={`/blogs/${post.id}`}>
      <article className="flex flex-col gap-2 overflow-hidden rounded-xl bg-mirage-200 p-4 transition hover:bg-mirage-300 dark:bg-mirage-900 dark:hover:bg-mirage-800">
        <div className="flex items-end justify-between">
          <h3 className="line-clamp-1 text-2xl font-bold">{post.title}</h3>
          <p className="text-nowrap">{formatDate(post.date)}</p>
        </div>
        <p className="line-clamp-3 text-start text-secondary-light dark:text-secondary">
          {post.description}
        </p>
        <div className="flex items-end justify-between gap-3">
          <div className="flex w-full gap-2">
            {post.tags.map((tag) => (
              <TagItem key={tag}>{tag}</TagItem>
            ))}
          </div>
          <p className="text-nowrap text-secondary-light dark:text-secondary">
            分類：{post.category.length === 0 ? "未歸類" : post.category}
          </p>
        </div>
      </article>
    </Link>
  );
}
