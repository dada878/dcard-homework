import Markdown from "markdown-to-jsx";

import TagItem from "../global/tagItem";
import { formatDate } from "@/utils/dateFormatter";

export default function ContentRender({ post }: { post: Post }) {
  return (
    <div className="dark:bg-mirage-900 bg-mirage-200 p-6 md:p-8 rounded-xl">
      <h1 className="text-5xl font-bold">{post.title}</h1>
      <div className="flex flex-row items-end justify-between py-4">
        <div className="flex gap-2">
          {post.tags.map((tag: string, i: number) => (
            <TagItem key={i}>{tag}</TagItem>
          ))}
        </div>
        {post && (
          <p className="dark:text-secondary text-secondary-light text-sm">
            {formatDate(new Date(post.date))}
          </p>
        )}
      </div>
      <hr className="text-secondary-dark py-3" />
      <main className="markdown">
        <Markdown>{post.content}</Markdown>
      </main>
    </div>
  );
}
