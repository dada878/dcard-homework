"use client";

import Link from "next/link";

import useQueryFilter from "@/hooks/useQueryFilter";

import TagItem from "../utilities/tagItem";

export default function CategoryFilter({
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
        className="w-full cursor-pointer hover:bg-mirage-500 hover:text-black dark:hover:bg-mirage-600 dark:hover:text-primary"
        selected={selected}
      >
        {name}
      </TagItem>
    </Link>
  );
}
