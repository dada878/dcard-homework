import Link from "next/link";

import Button from "./button";

export default function LinkButton({
  children,
  color = "blue",
  href,
  className = "",
  rounded = "rounded-xl"
}: Readonly<{
  children: React.ReactNode;
  color? : "blue" | "red" | "green" | "dark-blue";
  href: string;
  className?: string;
  rounded?: string;
}>) {
  return (
    <Link href={href} className="flex">
      <Button color={color} className={`${className} flex-1`} rounded={rounded} >
        {children}
      </Button>
    </Link>
  );
}