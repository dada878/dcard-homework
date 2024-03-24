import Link from "next/link";

import TagItem from "../global/tagItem";
import { formatDate } from "@/utils/dateFormatter";

export default function BlogPost({
  title,
  description,
  category,
  date,
  tags,
  id,
}: {
  title: string;
  description: string;
  category: string;
  date: Date;
  tags: Array<string>;
  id: number;
}) {
  return (
    <Link href={`/blogs/${id}`}>
      <article className="dark:bg-mirage-900 bg-mirage-200 flex flex-col p-4 rounded-xl gap-2 transition hover:bg-mirage-300 dark:hover:bg-mirage-800">
        <div className="flex justify-between items-end">
          <h3 className="text-2xl font-bold">{title}</h3>
          <p>{formatDate(date)}</p>
        </div>
        <p className="dark:text-secondary text-secondary-light text-start line-clamp-3">{description}</p>
        <div className="flex justify-between items-end">
          <div className="flex gap-2">
            {tags.map((tag, index) => (
              <TagItem key={index} > 
                {tag}
              </TagItem>
            ))}
          </div>
          <p className="dark:text-secondary text-secondary-light">分類：{category}</p>
        </div>
      </article>
    </Link>
  );
}