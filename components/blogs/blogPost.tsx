import Link from "next/link";
import TagItem from "./tagItem";
import { formatDate } from "@/utils/dateFormatter";

export default function BlogPost({
  title,
  description,
  category,
  date,
  tags,
}: {
  title: string;
  description: string;
  category: string;
  date: Date;
  tags: Array<string>;
}) {
  return (
    <Link href="blogs/ouo">
      <div className="bg-secondary flex flex-col p-4 rounded-xl gap-2 hover:bg-secondary-hover transition">
        <div className="flex justify-between items-end">
          <p className="font-bold text-2xl">{title}</p>
          <p>{formatDate(date)}</p>
        </div>
        <p className="text-secondary text-start">{description}</p>
        <div className="flex justify-between items-end">
          <div className="flex gap-2">
            {tags.map((tag, index) => (
              <TagItem key={index}>{tag}</TagItem>
            ))}
          </div>
          <p className="text-secondary">分類：{category}</p>
        </div>
      </div>
    </Link>
  );
}
