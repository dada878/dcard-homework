import Link from "next/link";
import { twMerge } from "tailwind-merge";

import Button from "./button";

export default function LinkButton({
  children,
  color = "blue",
  href,
  className = "",
}: Readonly<{
  children: React.ReactNode;
  color?: "blue" | "red" | "green" | "dark-blue";
  href: string;
  className?: string;
}>) {
  return (
    <Link href={href} className="flex">
      <Button color={color} className={twMerge(`flex-1`, className)}>
        {children}
      </Button>
    </Link>
  );
}
