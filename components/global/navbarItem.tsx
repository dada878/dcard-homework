import Link from "next/link";
import {twMerge} from "tailwind-merge";

export default function NavbarItem({
  name,
  url,
  className,
  isMobile,
  onClick = () => {},
}: Readonly<{
  name: string;
  url: string;
  className?: string;
  isMobile?: boolean;
  onClick?: () => void;
}>) {
  const linkClassName = twMerge(
    "dark:hover:text-secondary hover:text-secondary-light transition",
    className,
    isMobile ? "bg-gray text-center w-1/2 bg-opacity-30 rounded-md p-2" : "p-3",
  );

  return (
    <Link className={linkClassName} onClick={onClick} href={url}>
      {name}
    </Link>
  );
}
