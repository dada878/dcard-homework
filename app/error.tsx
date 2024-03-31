"use client";

import LinkButton from "@/components/global/linkButton";

export default function ErrorPage() {
  return (
    <div className="h-screen-inner w-screen flex justify-center items-center">
      <div className="dark:bg-mirage-800 bg-mirage-200 p-10 rounded-lg flex flex-col gap-5">
        <h1 className="text-center text-2xl">404 - Page Not Found</h1>
        <LinkButton href="/">Back to Home</LinkButton>
      </div>
    </div>
  );
}
