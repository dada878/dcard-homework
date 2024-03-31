import { useRouter, useSearchParams } from "next/navigation";

export default function useQueryFilter() {
  const router = useRouter();
  const params = useSearchParams();
  const tags = params.get("tags")?.split(",") ?? [];
  const category = params.get("category") ?? "";
  return {
    tags,
    category,
    setTags: (tags: string[]) => {
      const searchParams = new URLSearchParams();
      searchParams.set("tags", tags.join(","));
      searchParams.set("category", category);
      router.push(`blogs?${searchParams.toString()}`);
    },
    setCategory: (category: string) => {
      const searchParams = new URLSearchParams();
      searchParams.set("category", category);
      if (category === "全部") {
        searchParams.delete("category");
      }
      searchParams.set("tags", tags.join(","));
      router.push(`blogs?${searchParams.toString()}`);
    }
  };
}