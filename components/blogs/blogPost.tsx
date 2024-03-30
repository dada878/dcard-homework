import Link from "next/link";

import TagItem from "@/components/global/tagItem";
import { formatDate } from "@/utils/dateFormatter";


export default function BlogPost({post}: {post: Post}) {
  return (
    <Link href={`/blogs/${post.id}`}>
      <article className="dark:bg-mirage-900 bg-mirage-200 flex flex-col p-4 rounded-xl gap-2 transition hover:bg-mirage-300 dark:hover:bg-mirage-800">
        <div className="flex justify-between items-end">
          <h3 className="text-2xl font-bold">{post.title}</h3>
          <p>{formatDate(post.date)}</p>
        </div>
        <p className="dark:text-secondary text-secondary-light text-start line-clamp-3">{post.description}</p>
        <div className="flex justify-between items-end">
          <div className="flex gap-2">
            {post.tags.map(tag => (
              <TagItem key={tag} > 
                {tag}
              </TagItem>
            ))}
          </div>
          <p className="dark:text-secondary text-secondary-light">分類：{post.category}</p>
        </div>
      </article>
    </Link>
  );
}