import { ReactNode } from "react";

import { cn } from "@/utils/cn";

export default function TagItem({
  onClick,
  selected,
  children,
  className,
}: Readonly<{
  onClick?: () => void;
  selected?: boolean;
  children: ReactNode;
  className?: string;
}>) {
  return (
    <button
      onClick={onClick}
      className={cn(
        `line-clamp-1 text-nowrap rounded-md bg-mirage-400 px-2 py-1 text-center text-secondary-light transition dark:bg-mirage-700 dark:text-secondary`,
        className,
        {
          "outline outline-1 outline-mirage-500": selected,
        },
      )}
    >
      {children}
    </button>
  );
}
