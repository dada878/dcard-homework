"use client";

import { useEffect, useState } from "react";

import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useInView } from "react-intersection-observer";

import { getPostList } from "@/actions/posts";

import BlogPost from "./blogPost";

export function PostListRender({ query }: Readonly<{ query?: PostQuery }>) {
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState<Post[]>([]);
  const [noMorePosts, setNoMorePosts] = useState(false);
  const { ref, inView } = useInView();

  // reset posts when query changes
  useEffect(() => {
    setPosts([]);
    setCurrentPage(1);
    setNoMorePosts(false);
  }, [query]);

  // fetch posts when scroll to the end (when spinner is in view)
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
        return <BlogPost key={post.id} post={post} />;
      })}
      <div className="flex justify-center">
        {!noMorePosts ? (
          <FontAwesomeIcon
            ref={ref}
            className="size-6 animate-spin"
            icon={faSpinner}
          />
        ) : (
          <p className="text-secondary">沒有更多文章了 qwq</p>
        )}
      </div>
    </>
  );
}
