import Link from "next/link";

import { cn } from "@/utils/cn";

import Button from "./button";

interface LinkButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color?: "blue" | "red" | "green" | "dark-blue";
  href: string;
  className?: string;
  onClick?: () => void;
  linkAriaLabel?: string;
}

export default function LinkButton({
  children,
  color = "blue",
  href,
  className = "",
  onClick,
  linkAriaLabel,
  ...props
}: Readonly<LinkButtonProps>) {
  return (
    <Link href={href} className="flex" aria-label={linkAriaLabel}>
      <Button color={color} className={cn(`flex-1`, className)} {...props}>
        {children}
      </Button>
    </Link>
  );
}
