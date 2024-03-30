"use client";

import { useRouter, useSearchParams } from "next/navigation";

import TagItem from "../global/tagItem";

export default function TogglableTagItem({
  name,
  selected,
}: Readonly<{
  onClick?: () => void;
  name: string;
  selected?: boolean;
  hasCloseButton?: boolean;
}>) {
  const router = useRouter();
  const params = useSearchParams();
  const tags = params.get("tags")?.split(",") ?? [];
  const category = params.get("category") ?? "";
  return (
    <TagItem
      selected={selected}
      onClick={() => {
        if (selected) {
          tags.splice(tags.indexOf(name), 1);
        } else {
          tags.push(name);
        }
        const searchParams = new URLSearchParams();
        searchParams.set("tags", tags.join(","));
        searchParams.set("category", category);
        router.push(`blogs?${searchParams.toString()}`);
      }}
    >
      {name}
    </TagItem>
  );
}
