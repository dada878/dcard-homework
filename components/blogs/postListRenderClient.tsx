"use client";

import { PostListRender } from "./postListRender";

export default function PostListRenderClient({
  query
} : {
  query: PostQuery
}) {
  return <PostListRender query={query}></PostListRender>;
}