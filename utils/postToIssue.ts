export function postToIssue(post: Post): Issue {
  return {
    title: post.title,
    // NOTE: maybe there is a better way to update this
    body: `---\ndescription: ${post.description
      .replaceAll("\n", " ")
      .replaceAll(":", "：")}\n---\n${post.content}`,
    labels: [
      ...post.tags.map((tag) => ({ name: `tag:${tag}` })),
      { name: `category:${post.category}` },
    ],
    created_at: new Date().toISOString(),
    number: post.id,
  };
}
