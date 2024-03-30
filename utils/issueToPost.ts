import fm from "front-matter";

type Attributes = {
  description?: string;
};

type FrontMatter = {
  attributes?: Attributes;
  body: string;
};

export function issueToPost(issue: Issue): Post {
  const postContent: FrontMatter = fm(issue.body);
  return {
    title: issue.title,
    content: postContent.body,
    category:
      issue.labels
        ?.filter((label) => label.name.startsWith("category:"))
        ?.at(0)
        ?.name?.slice(9) || "未歸類",
    tags: issue.labels
      .filter((label) => label.name.startsWith("tag:"))
      .map((label) => label.name.slice(4)),
    date: new Date(issue.created_at),
    description: postContent.attributes?.description || "",
    id: issue.number,
  };
}
