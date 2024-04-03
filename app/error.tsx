"use client";

import LinkButton from "@/components/global/linkButton";

export default function ErrorPage() {
  return (
    <div className="flex h-screen-inner w-screen items-center justify-center">
      <div className="flex flex-col gap-5 rounded-lg bg-mirage-200 p-10 dark:bg-mirage-800">
        <h1 className="text-center text-2xl">404 - Page Not Found</h1>
        <LinkButton href="/">Back to Home</LinkButton>
      </div>
    </div>
  );
}
