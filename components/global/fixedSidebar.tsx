import { ReactNode } from "react";

export default function FixedSidebar({ children, className }: { children: ReactNode, className?: string}) {
  return <aside className={`hidden md:flex flex-col gap-5 w-60 fixed m-10 ${className}`}>{children}</aside>;
}