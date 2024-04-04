"use server";

import { isOwner } from "@/actions/auth";
import { fetchGithubAPI } from "@/utils/fetchGithubAPI";
import { issueToPost } from "@/utils/issueToPost";
import { postToIssue } from "@/utils/postToIssue";
import { queryToURL } from "@/utils/queryToString";
import validatePost from "@/utils/validatePost";

export async function getPostList(page: string = "1", query?: PostQuery) {
  const queryString = query ? queryToURL(query, page) : "";
  const data = await fetchGithubAPI(`/issues?${queryString}`);
  const posts = data.map((issue: Issue) => issueToPost(issue));
  return posts;
}

export async function getPost(id: string) {
  const issue: Issue = await fetchGithubAPI(`/issues/${id}`);
  return issueToPost(issue);
}

export async function createPost(post: Post) {
  const haveAccess = await isOwner();
  if (!haveAccess) {
    throw new Error("噢不 你似乎沒有權限qwq");
  }
  validatePost(post);
  const createdPost = await fetchGithubAPI(
    "/issues",
    postToIssue(post),
    "POST",
  );
  return createdPost.number;
}

export async function updatePost(id: string, post: Post) {
  const haveAccess = await isOwner();
  if (!haveAccess) {
    throw new Error("噢不 你似乎沒有權限qwq");
  }
  validatePost(post);
  const result = await fetchGithubAPI(
    `/issues/${id}`,
    postToIssue(post),
    "PATCH",
  );
  return result.number;
}

export async function deletePost(id: string) {
  const haveAccess = await isOwner();
  if (!haveAccess) {
    throw new Error("噢不 你似乎沒有權限qwq");
  }
  const result = await fetchGithubAPI(
    `/issues/${id}`,
    {
      state: "closed",
    },
    "PATCH",
  );
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
      id: comment.id,
    };
  });
  return comments;
}

export async function createComment(id: string, comment: string) {
  const result = await fetchGithubAPI(
    `/issues/${id}/comments`,
    {
      body: comment,
    },
    "POST",
  );
  return result;
}
