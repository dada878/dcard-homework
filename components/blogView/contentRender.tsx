import { formatDate } from "@/utils/dateFormatter";

import MarkdownRender from "../global/markdownRender";
import TagItem from "../global/tagItem";

export default function ContentRender({ post }: Readonly<{ post: Post }>) {
  return (
    <div className="dark:bg-mirage-900 bg-mirage-200 p-6 md:p-8 rounded-xl">
      <h1 className="text-5xl font-bold line-clamp-1">{post.title}</h1>
      <div className="flex flex-row items-end justify-between py-4">
        <div className="flex gap-2">
          {post.tags.map((tag: string) => (
            <TagItem key={tag}>{tag}</TagItem>
          ))}
        </div>
        {post && (
          <p className="dark:text-secondary text-secondary-light text-sm">
            {formatDate(new Date(post.date))}
          </p>
        )}
      </div>
      <hr className="text-secondary-dark py-3" />
      <main className="prose dark:prose-invert">
        <MarkdownRender content={post.content} />
      </main>
    </div>
  );
}
