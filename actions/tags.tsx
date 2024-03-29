"use server";

import { fetchGithubAPI } from "@/utils/fetchGithubAPI";

export async function getTagList() {
  const data : Array<Label> = await fetchGithubAPI("/labels");
  const tags = data
    .map((label: Label) => label.name)
    .filter((name: string) => name.startsWith("tag:"))
    .map((name: string) => name.slice(4));
  return tags;
}
