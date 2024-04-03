import { formatDate } from "@/utils/dateFormatter";

import Card from "../utilities/card";
import MarkdownRender from "../utilities/markdownRender";
import TagItem from "../utilities/tagItem";

export default function BlogContent({ post }: Readonly<{ post: Post }>) {
  return (
    <Card className="overflow-hidden p-6 md:p-8">
      <h1 className="line-clamp-1 overflow-ellipsis text-5xl font-bold">
        {post.title}
      </h1>
      <div className="flex flex-row items-end justify-between py-4">
        <div className="flex gap-2">
          {post.tags.map((tag: string) => (
            <TagItem key={tag}>{tag}</TagItem>
          ))}
        </div>
        {post && (
          <p className="text-nowrap text-sm text-secondary-light dark:text-secondary">
            {formatDate(new Date(post.date))}
          </p>
        )}
      </div>
      <hr className="py-3 text-secondary-dark" />
      <main className="prose dark:prose-invert">
        <MarkdownRender content={post.content} />
      </main>
    </Card>
  );
}
