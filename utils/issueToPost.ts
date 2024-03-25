export function issueToPost(issue: Issue): Post {
  return {
    title: issue.title,
    content: issue.body,
    category: issue.labels
      .filter((label) => label.name.startsWith("category:"))?.at(0)
      ?.name?.slice(9) || "未歸類",
    tags: issue.labels
      .filter((label) => label.name.startsWith("tag:"))
      .map((label) => label.name.slice(4)),
    date: new Date(issue.created_at),
    description: "",
    id: issue.number,
  };
}