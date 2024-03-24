"use server";

const GITHUB_API_URL = `https://api.github.com/repos/${process.env.GITHUB_REPO_OWNER}/${process.env.GITHUB_REPO_NAME}/labels`;

export async function getCategoryList() {
  const result = await fetch(GITHUB_API_URL, {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`,
    },
  });
  const data : Array<Label> = await result.json();
  const categories = data
    .map((label: Label) => label.name)
    .filter((name: string) => name.startsWith("category:"))
    .map((name: string) => name.slice(9));
  return categories;
}