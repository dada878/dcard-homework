"use client";

import Link from "next/link";

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
  const { tags, setTags } = useQueryFilter();
  const newUrl = setTags(
    selected ? tags.filter((tag) => tag !== name) : [...tags, name]
  );
  return (
    <Link href={newUrl}>
      <TagItem
        selected={selected}
        className="cursor-pointer hover:bg-mirage-500 dark:hover:bg-mirage-600 hover:text-black dark:hover:text-primary"
      >
        {name}
      </TagItem>
    </Link>
  );
}
