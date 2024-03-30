"use client";

import { useRouter, useSearchParams } from "next/navigation";

import TagItem from "../global/tagItem";

export default function CategoryItem({
  name,
  selected,
}: Readonly<{
  name: string;
  selected?: boolean;
}>) {
  const router = useRouter();
  const params = useSearchParams();
  const tags = params.get("tags")?.split(",") ?? [];
  return <TagItem className="cursor-pointer hover:bg-mirage-500 dark:hover:bg-mirage-600 hover:text-black dark:hover:text-primary" selected={selected} onClick={() => {
    const searchParams = new URLSearchParams();
    searchParams.set("category", name);
    // NOTE: maybe there is a better way check if the category is "all"
    if (name === "全部") {
      searchParams.delete("category");
    }
    searchParams.set("tags", tags.join(","));
    router.push(`blogs?${searchParams.toString()}`);
  }}>{name}</TagItem>;
}
