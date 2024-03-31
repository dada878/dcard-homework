"use client";

import React, { useEffect } from "react";

import { signIn } from "next-auth/react";

type Props = {
  searchParams?: Record<"callbackUrl" | "error", string>;
};

const SignInPage = (props: Props) => {
  useEffect(() => {
    signIn("github", {
      callbackUrl: props.searchParams?.callbackUrl,
    });
  });
  return (
    <div className="flex justify-center items-center h-screen-inner">
      <div className="bg-mirage-800 p-8 rounded-lg flex justify-center flex-col gap-4">
        Logging in...
      </div>
    </div>
  );
};

export default SignInPage;
