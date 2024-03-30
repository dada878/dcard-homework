import { ReactNode } from "react";

export default function TagItem({
  onClick,
  selected,
  children,
}: Readonly<{
  onClick?: () => void;
  selected?: boolean;
  children: ReactNode;
}>) {
  return (
    <span
      onClick={onClick}
      className={`dark:bg-mirage-700 bg-mirage-400 py-1 px-2 text-secondary-light dark:text-secondary rounded-md cursor-pointer transition hover:bg-mirage-500 dark:hover:bg-mirage-600 hover:text-black dark:hover:text-primary text-center ${
        selected ? "outline outline-1 outline-mirage-500" : ""
      }`}
    >
      {children}
    </span>
  );
}
