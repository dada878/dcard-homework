import { ReactNode } from "react";

import { twMerge } from "tailwind-merge";

export default function FixedSidebar({
  children,
  className,
}: Readonly<{ children: ReactNode; className?: string }>) {
  return (
    <aside
      className={twMerge(`hidden md:flex flex-col gap-5 w-60 fixed m-10`, className)}
    >
      {children}
    </aside>
  );
}
