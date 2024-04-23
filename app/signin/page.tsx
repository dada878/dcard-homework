"use client";

import { signIn } from "next-auth/react";

type Props = {
  searchParams?: Record<"callbackUrl" | "error", string>;
};

const SignInPage = (props: Props) => {
  // auto login when user view this page
  if (typeof window !== 'undefined') {
    signIn("github", {
      callbackUrl: "/",
    });
  }

  return (
    <div className="flex h-screen-inner items-center justify-center">
      <div className="flex flex-col justify-center gap-4 rounded-lg bg-mirage-200 p-8 dark:bg-mirage-800">
        Logging in...
      </div>
    </div>
  );
};

export default SignInPage;
