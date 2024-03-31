"use client";

import useQueryFilter from "@/hooks/useQueryFilter";

import TagItem from "../global/tagItem";

export default function TogglableTagItem({
  name,
  selected,
}: Readonly<{
  onClick?: () => void;
  name: string;
  selected?: boolean;
}>) {
  const {tags, setTags} = useQueryFilter();
  return (
    <TagItem
      selected={selected}
      className="cursor-pointer hover:bg-mirage-500 dark:hover:bg-mirage-600 hover:text-black dark:hover:text-primary"
      onClick={() => {
        if (selected) {
          setTags(tags.filter((tag) => tag !== name));
        } else {
          setTags([...tags, name]);
        }
      }}
    >
      {name}
    </TagItem>
  );
}
