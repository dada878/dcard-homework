"use client";
import { PostsRender } from "./postsRender";

export default function PostRenderClient({
  query
} : {
  query: PostQuery
}) {
  return <PostsRender query={query}></PostsRender>;
}