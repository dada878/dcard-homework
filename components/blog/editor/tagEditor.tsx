import { useState } from "react";

import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Input from "@/components/form/input";
import Button from "@/components/utilities/button";

import CloseableTagItem from "./closeableTagItem";

export default function TagEditor({
  post,
  setPost,
}: {
  post: Post;
  setPost: (post: Post) => void;
}) {
  const [tagName, setTagName] = useState("");

  const handleAddTag = () => {
    if (tagName && !post.tags.includes(tagName)) {
      setPost({ ...post, tags: [...post.tags, tagName] });
      setTagName("");
    }
  };

  return (
    <>
      <div className="flex flex-wrap gap-3 empty:hidden">
        {post.tags.map((tag) => (
          <CloseableTagItem
            key={tag}
            name={tag}
            onClick={() => {
              setPost({
                ...post,
                tags: post.tags.filter((t) => t !== tag),
              });
            }}
          />
        ))}
      </div>
      <div className="flex gap-2">
        <Input
          value={tagName}
          onChange={(e) => setTagName(e.target.value)}
          placeholder="添加標籤..."
          onEnterPress={() => handleAddTag()}
        />
        <Button onClick={() => handleAddTag()}>
          <div className="flex items-center justify-center gap-4">
            <FontAwesomeIcon icon={faPlus} />
          </div>
        </Button>
      </div>
    </>
  );
}
