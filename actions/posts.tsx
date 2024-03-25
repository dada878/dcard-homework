"use server";

import { authOptions } from "@/lib/auth";
import { issueToPost } from "@/utils/issueToPost";
import { parseLinkHeader } from "@/utils/linkHeaderParser";
import { queryToURL } from "@/utils/queryToString";
import { getServerSession } from "next-auth";
import { isOwner } from "./auth";

const GITHUB_API_URL = `https://api.github.com/repos/${process.env.GITHUB_REPO_OWNER}/${process.env.GITHUB_REPO_NAME}/issues`;

async function sendRequest(url: string, body?: any, method: string = "GET") {
  const session = await getServerSession(authOptions);
  return fetch(`${GITHUB_API_URL}${url}`, {
    method,
    headers: {
      Authorization: `Bearer ${
        session?.accessToken || process.env.GITHUB_PERSONAL_ACCESS_TOKEN
      }`,
      Accept: "application/vnd.github+json",
    },
    body: JSON.stringify(body),
  });
}

export async function getPostList(page: string = "1", query?: PostQuery) {
  const queryString = query ? queryToURL(query, page) : "";
  const result = await sendRequest(`?${queryString}`);
  const data = await result.json();
  const posts = data.map((issue: Issue) => issueToPost(issue));
  return posts;
}

export async function getPagination(page: string, query?: PostQuery) {
  const queryString = query ? queryToURL(query, page) : "";
  const result = await sendRequest(`?${queryString}`);
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
  const result = await sendRequest(`/${id}`);
  const issue: Issue = await result.json();
  return issueToPost(issue);
}

export async function createPost(post: Post) {
  const isAdmin = await isOwner();
  if (!isAdmin) {
    throw new Error("Unauthorized");
  }
  const result = await sendRequest("", {
    title: post.title,
    body: post.content,
    labels: [
      ...post.tags.map((tag) => `tag:${tag}`),
      `category:${post.category}`,
    ],
  }, "POST");
  const createdPost = await result.json();
  return createdPost.number;
}

export async function updatePost(id: string, post: Post) {
  const isAdmin = await isOwner();
  if (!isAdmin) {
    throw new Error("Unauthorized");
  }
  const result = await sendRequest(`/${id}`, {
    title: post.title,
    body: post.content,
    labels: [
      ...post.tags.map((tag) => `tag:${tag}`),
      `category:${post.category}`,
    ],
  }, "PATCH");
  return result.status;
}

export async function deletePost(id: string) {
  const isAdmin = await isOwner();
  if (!isAdmin) {
    throw new Error("Unauthorized");
  }
  const result = await sendRequest(`/${id}`, {
    state: "closed",
  }, "PATCH");
  return result.status;
}

export async function getPostComments(id: string) {
  const result = await sendRequest(`/${id}/comments`);
  const data = await result.json();
  const comments: Array<CommentData> = data.map((comment: any) => {
    return {
      author: comment.user.login,
      content: comment.body,
      avatar: comment.user.avatar_url,
      date: new Date(comment.created_at),
    };
  });
  return comments;
}

export async function createComment(id: string, comment: string) {
  const result = await sendRequest(`/${id}/comments`, {
    body: comment,
  }, "POST");
  return result.status;
}