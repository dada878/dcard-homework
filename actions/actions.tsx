"use server";

const GITHUB_API_URL = `https://api.github.com/repos/${process.env.GITHUB_REPO_OWNER}/${process.env.GITHUB_REPO_NAME}/issues`;
const GITHUB_HEADERS = {
  Authorization: `Bearer ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`,
};

export async function getPostList() {
  const result = await fetch(`${GITHUB_API_URL}?q=state:open&sort=updated`, {
    headers: GITHUB_HEADERS,
  });
  const data = await result.json();
  const posts = data.map((issue: Issue) => ({
    title: issue.title,
    content: issue.body,
    category: "React.js",
    tags: ["React", "JavaScript"],
    date: new Date(issue.created_at),
    description: "",
    id: issue.number,
  }));
  return posts;
}

export async function getPost(id: string) {
  const result = await fetch(`${GITHUB_API_URL}/${id}`, {
    headers: GITHUB_HEADERS,
  });
  const post = await result.json();
  return {
    title: post.title,
    content: post.body,
    category: "React.js",
    tags: ["React", "JavaScript"],
    date: new Date(post.created_at),
    description: "",
    id: post.number,
  };
}

export async function createPost(post: Post) {
  const result = await fetch(GITHUB_API_URL, {
    method: "POST",
    headers: GITHUB_HEADERS,
    body: JSON.stringify({
      title: post.title,
      body: post.content,
    }),
  });
  const createdPost = await result.json();
  return createdPost.number;
}

export async function updatePost(id: string, post: Post) {
  const result = await fetch(`${GITHUB_API_URL}/${id}`, {
    method: "PATCH",
    headers: GITHUB_HEADERS,
    body: JSON.stringify({
      title: post.title,
      body: post.content,
    }),
  });
  return result.status;
}

export async function deletePost(id: string) {
  const result = await fetch(`${GITHUB_API_URL}/${id}`, {
    method: "PATCH",
    headers: GITHUB_HEADERS,
    body: JSON.stringify({
      state: "closed",
    }),
  });
  return result.status;
}

export async function getComments(id: string) {
  const result = await fetch(`${GITHUB_API_URL}/${id}/comments`, {
    headers: GITHUB_HEADERS,
  });
  const data = await result.json();
  const comments: Array<Comment> = data.map((comment: any) => {
    return {
      author: comment.user.login,
      content: comment.body,
      avatar: comment.user.avatar_url,
      date: new Date(comment.created_at),
    };
  });
  return comments;
}