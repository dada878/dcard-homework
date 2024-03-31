import { ReactNode } from "react";

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
      className={`dark:bg-mirage-700 line-clamp-1 text-nowrap bg-mirage-400 py-1 px-2 text-secondary-light dark:text-secondary rounded-md cursor-pointer transition text-center ${className ?? ""} ${
        selected ? "outline outline-1 outline-mirage-500" : ""
      }`}
    >
      {children}
    </button>
  );
}
