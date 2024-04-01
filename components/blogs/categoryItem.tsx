"use client";

import Link from "next/link";

import useQueryFilter from "@/hooks/useQueryFilter";

import TagItem from "../global/tagItem";

export default function CategoryItem({
  name,
  selected,
}: Readonly<{
  name: string;
  selected?: boolean;
}>) {
  const { setCategory } = useQueryFilter();
  const newUrl = setCategory(name);
  
  return (
    <Link href={newUrl}>
      <TagItem
        className="cursor-pointer w-full hover:bg-mirage-500 dark:hover:bg-mirage-600 hover:text-black dark:hover:text-primary"
        selected={selected}
      >
        {name}
      </TagItem>
    </Link>
  );
}
