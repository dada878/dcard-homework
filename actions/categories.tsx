"use server";

import { fetchGithubAPI } from "@/utils/fetchGithubAPI";

export async function getCategoryList() {
  const data: Array<Label> = await fetchGithubAPI("/labels");
  const categories = data
    .map((label: Label) => label.name)
    .filter((name: string) => name.startsWith("category:"))
    .map((name: string) => name.slice(9))
    .filter((name: string) => name.length);
  return categories;
}
