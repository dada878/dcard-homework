import { ReactNode } from "react";

import { twMerge } from "tailwind-merge";

export default function FixedSidebar({
  children,
  className,
}: Readonly<{ children: ReactNode; className?: string }>) {
  return (
    <aside
      className={twMerge(
        `fixed m-10 hidden w-60 flex-col gap-5 md:flex`,
        className,
      )}
    >
      {children}
    </aside>
  );
}
