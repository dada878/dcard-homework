"use server";

import { issueToPost } from "@/utils/issueToPost";
import { parseLinkHeader } from "@/utils/linkHeaderParser";
import { queryToURL } from "@/utils/queryToString";

const GITHUB_API_URL = `https://api.github.com/repos/${process.env.GITHUB_REPO_OWNER}/${process.env.GITHUB_REPO_NAME}/issues`;
const GITHUB_HEADERS = {
  Authorization: `Bearer ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`,
  Accept: "application/vnd.github+json",
};

export async function getPostList(page: string = "1", query?: PostQuery) {
  let queryString = query ? queryToURL(query, page) : "";
  const result = await fetch(`${GITHUB_API_URL}?${queryString}`, {
    headers: GITHUB_HEADERS,
  });
  const data = await result.json();
  const posts = data.map((issue: Issue) => issueToPost(issue));
  return posts;
}

export async function getPagination(page: string, query?: PostQuery) {
  const queryString = query ? queryToURL(query, page) : "";
  const result = await fetch(
    `${GITHUB_API_URL}?${queryString}`,
    {
      headers: GITHUB_HEADERS,
    }
  );
  const pagination = parseLinkHeader(result.headers.get("link")!);
  return {
    first: parseInt(pagination.first) || 1,
    last: parseInt(pagination.last) || parseInt(page),
    prev: parseInt(pagination.prev) || null,
    next: parseInt(pagination.next) || null,
  } as Pagination;
}

// TODO: here may can add a cache to reduce the request times
export async function getPost(id: string) {
  const result = await fetch(`${GITHUB_API_URL}/${id}`, {
    headers: GITHUB_HEADERS,
  });
  const issue: Issue = await result.json();
  return issueToPost(issue);
}

export async function createPost(post: Post) {
  const result = await fetch(GITHUB_API_URL, {
    method: "POST",
    headers: GITHUB_HEADERS,
    body: JSON.stringify({
      title: post.title,
      body: post.content,
      labels: [
        ...post.tags.map((tag) => `tag:${tag}`),
        `category:${post.category}`,
      ],
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
      labels: [
        ...post.tags.map((tag) => `tag:${tag}`),
        `category:${post.category}`,
      ],
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

export async function getPostComments(id: string) {
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
