"use client";

import { signOut } from "next-auth/react";

type Props = {
  searchParams?: Record<"callbackUrl" | "error", string>;
};

const SignOut = (props: Props) => {
  // auto login when user view this page
  if (typeof window !== "undefined") {
    signOut({
      callbackUrl: "/",
    });
  }

  return (
    <div className="flex h-screen-inner items-center justify-center">
      <div className="flex flex-col justify-center gap-4 rounded-lg bg-mirage-200 p-8 dark:bg-mirage-800">
        Logging out...
      </div>
    </div>
  );
};

export default SignOut;
