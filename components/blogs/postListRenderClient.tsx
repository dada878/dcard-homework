"use client";

import { PostListRender } from "./postListRender";

export default function PostListRenderClient({
  query
} : Readonly<{
  query: PostQuery
}>) {
  return <PostListRender query={query}></PostListRender>;
}