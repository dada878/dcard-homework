"use client";
import { useEffect, useState } from "react";

import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import BlogPost from "./blogPost";
import { getPostList } from "@/actions/posts";

export function PostsRender({ query }: { query?: PostQuery }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState<Post[]>([]);
  const [noMorePosts, setNoMorePosts] = useState(false);
  const { ref, inView } = useInView();

  useEffect(() => {
    setPosts([]);
    setCurrentPage(1);
    setNoMorePosts(false);
  }, [query]);

  useEffect(() => {
    let didCancel = false;
    async function loadMorePosts() {
      const newPosts = await getPostList(currentPage.toString(), query);
      if (newPosts.length === 0) {
        setNoMorePosts(true);
      }
      if (!didCancel && newPosts.length > 0) {
        setPosts([...posts, ...newPosts]);
        setCurrentPage(currentPage + 1);
      }
    }
    if (inView) {
      loadMorePosts();
    }
    return () => {
      didCancel = true;
    };
  }, [inView, posts, query, currentPage]);

  return (
    <>
      {posts.map((post: Post) => {
        return (
          <BlogPost
            id={post.id}
            key={post.id}
            title={post.title}
            description={post.content}
            category={post.category}
            tags={post.tags}
            date={new Date(post.date)}
          />
        );
      })}
      <div className="flex justify-center">
        {!noMorePosts ? (
          <FontAwesomeIcon
            ref={ref}
            className="animate-spin size-6"
            icon={faSpinner}
          />
        ) : <p className="text-secondary">沒有更多文章了 qwq</p>}
      </div>
    </>
  );
}
