import { ReactNode } from "react";

import { twMerge } from "tailwind-merge";

export default function Container({
  children,
  className,
}: Readonly<{
  children: ReactNode;
  className?: string;
}>) {
  return (
    <main
      // NOTE: too complex
      className={twMerge(
        `max-w-screen ml-0 flex flex-col gap-5 p-6 md:ml-64 md:max-w-[min(calc(100vw_-_16rem),56rem)] md:p-10 lg:ml-80 lg:w-4/6 lg:max-w-[min(calc(100vw_-_19rem),56rem)]`,
        className,
      )}
    >
      {children}
    </main>
  );
}
