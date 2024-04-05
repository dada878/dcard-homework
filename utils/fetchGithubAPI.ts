import "server-only";
import { getServerSession } from "next-auth";

import { authOptions } from "@/lib/auth";

const GITHUB_API_URL = `https://api.github.com/repos/${process.env.GITHUB_REPO_OWNER}/${process.env.GITHUB_REPO_NAME}`;

const cache = new Map<string, any>();

export async function fetchGithubAPI(
  url: string,
  body?: any,
  method: string = "GET",
) {
  const session = await getServerSession(authOptions);
  // cache all when not authenticated
  if (cache.has(url) && method === "GET" && !session) {
    return cache.get(url);
  }

  const result = await fetch(`${GITHUB_API_URL}${url}`, {
    method,
    headers: {
      Authorization: `Bearer ${
        session?.accessToken ?? process.env.GITHUB_PERSONAL_ACCESS_TOKEN
      }`,
      Accept: "application/vnd.github+json",
    },
    body: JSON.stringify(body),
  });

  const data = await result.json();
  if (result.status >= 400) {
    throw new Error(data.message);
  }

  cache.set(url, data);
  
  return data;
}
