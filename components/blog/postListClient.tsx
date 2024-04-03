"use client";

import PostList from "./blogList";

export default function PostListClient({
  query,
}: Readonly<{
  query: PostQuery;
}>) {
  return <PostList query={query}></PostList>;
}
