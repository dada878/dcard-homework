import { ReactNode } from "react";

import { cn } from "@/utils/cn";

export default function FixedSidebar({
  children,
  className,
}: Readonly<{ children: ReactNode; className?: string }>) {
  return (
    <aside
      className={cn(
        `fixed m-10 hidden w-60 flex-col gap-5 md:flex`,
        className,
      )}
    >
      {children}
    </aside>
  );
}
