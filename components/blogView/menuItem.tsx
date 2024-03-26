import { ReactNode } from "react";

export default function MenuItem({
  children,
  active,
  onClick
}: {
  children: ReactNode;
  active?: Boolean;
  onClick?: () => void;
}) {
  return (
    <p
      onClick={onClick}
      className={`border-l-4 ${
        active ? "dark:border-primary border-black font-bold text-black dark:text-primary" : "border-transparent dark:text-secondary text-secondary-light"
      } dark:hover:border-primary hover:border-black transition-all pl-3 cursor-pointer hover:text-black dark:hover:text-primary hover:font-bold`}
    >
      {children}
    </p>
  );
}
