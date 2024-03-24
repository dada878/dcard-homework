"use server";

const GITHUB_API_URL = `https://api.github.com/repos/${process.env.GITHUB_REPO_OWNER}/${process.env.GITHUB_REPO_NAME}/labels`;

export async function getTagList() {
  const result = await fetch(GITHUB_API_URL, {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`,
    },
  });
  const data : Array<Label> = await result.json();
  const tags = data
    .map((label: Label) => label.name)
    .filter((name: string) => name.startsWith("tag:"))
    .map((name: string) => name.slice(4));
  return tags;
}
