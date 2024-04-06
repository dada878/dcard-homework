export function postToIssue(post: Post): Issue {
  return {
    title: post.title,
    // avoid yaml parsing error
    body: `---\ndescription: "${post.description
      .replaceAll("\n", " ")
      .replaceAll(`"`, `\\"`)}"\n---\n${post.content}`,
    labels: [
      ...post.tags.map((tag) => ({ name: `tag:${tag}` })),
      { name: `category:${post.category}` },
    ],
    created_at: new Date().toISOString(),
    number: post.id,
  };
}
