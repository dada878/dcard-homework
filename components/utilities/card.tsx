import { ReactNode, Ref } from "react";

import { cn } from "@/utils/cn";

interface CardProps {
  children: ReactNode;
  enableHover?: boolean;
  className?: string;
  ref?: Ref<HTMLDivElement> | null;
}

export default function Card({
  children,
  enableHover = false,
  className,
  ref,
}: CardProps) {
  return (
      <div
        className={cn(
          "rounded-xl bg-mirage-200 p-4 transition dark:bg-mirage-900",
          className,
          {
            "hover:bg-mirage-300 dark:hover:bg-mirage-800": enableHover,
          },
        )}
        ref={ref}
      >
        {children}
      </div>
  );
}