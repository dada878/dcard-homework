"use server";

import { issueToPost } from "@/utils/issueToPost";
import { queryToURL } from "@/utils/queryToString";
import { isOwner } from "./auth";
import { fetchGithubAPI } from "@/utils/fetchGithubAPI";

export async function getPostList(page: string = "1", query?: PostQuery) {
  const queryString = query ? queryToURL(query, page) : "";
  const data = await fetchGithubAPI(`/issues?${queryString}`);
  const posts = data.map((issue: Issue) => issueToPost(issue));
  return posts;
}

// TODO: here may can add a cache to reduce the request times
export async function getPost(id: string) {
  const issue: Issue = await fetchGithubAPI(`/issues/${id}`);
  return issueToPost(issue);
}

export async function createPost(post: Post) {
  const isAdmin = await isOwner();
  if (!isAdmin) {
    throw new Error("Unauthorized");
  }
  const createdPost = await fetchGithubAPI("/issues", {
    title: post.title,
    body: post.content,
    labels: [
      ...post.tags.map((tag) => `tag:${tag}`),
      `category:${post.category}`,
    ],
  }, "POST");
  return createdPost.number;
}

export async function updatePost(id: string, post: Post) {
  const isAdmin = await isOwner();
  if (!isAdmin) {
    throw new Error("Unauthorized");
  }
  const result = await fetchGithubAPI(`/issues/${id}`, {
    title: post.title,
    body: post.content,
    labels: [
      ...post.tags.map((tag) => `tag:${tag}`),
      `category:${post.category}`,
    ],
  }, "PATCH");
  return result.number;
}

export async function deletePost(id: string) {
  const isAdmin = await isOwner();
  if (!isAdmin) {
    throw new Error("Unauthorized");
  }
  const result = await fetchGithubAPI(`/issues/${id}`, {
    state: "closed",
  }, "PATCH");
  return result.number;
}

export async function getPostComments(id: string) {
  const data = await fetchGithubAPI(`/issues/${id}/comments`);
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
  const result = await fetchGithubAPI(`/issues/${id}/comments`, {
    body: comment,
  }, "POST");
  return result;
}