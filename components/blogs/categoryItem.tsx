"use client";

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
  return (
    <TagItem
      className="cursor-pointer hover:bg-mirage-500 dark:hover:bg-mirage-600 hover:text-black dark:hover:text-primary"
      selected={selected}
      onClick={() => {
        setCategory(name);
      }}
    >
      {name}
    </TagItem>
  );
}
