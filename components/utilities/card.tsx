import { ReactNode, forwardRef } from "react";

import { cn } from "@/utils/cn";

function Card({
  children,
  enableHover = false,
  className = "",
  ref,
}: Readonly<{
  children: ReactNode;
  enableHover?: boolean;
  className?: string;
  ref?: React.RefObject<HTMLDivElement>;
}>) {
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

export default forwardRef(Card);
