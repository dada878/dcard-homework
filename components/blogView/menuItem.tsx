import { ReactNode } from "react";

export default function MenuItem({
  children,
  active,
}: {
  children: ReactNode;
  active?: Boolean;
}) {
  return (
    <p
      className={`hover:text-primary border-l-4 ${
        active ? "border-primary text-primary" : "border-transparent text-secondary"
      } hover:border-primary transition-all pl-3 cursor-pointer`}
    >
      {children}
    </p>
  );
}
