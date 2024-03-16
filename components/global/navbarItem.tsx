import Link from "next/link";

export default function NavbarItem({
  name,
  url,
  className,
  isMobile,
  onClick = () => {},
}: {
  name: string;
  url: string;
  className?: string;
  isMobile?: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      className={`transition hover:text-secondary ${className} ${
        isMobile
          ? "bg-gray text-center w-1/2 bg-opacity-30 rounded-md p-2"
          : "p-3"
      }`}
      onClick={onClick}
      href={url}
    >
      {name}
    </Link>
  );
}
