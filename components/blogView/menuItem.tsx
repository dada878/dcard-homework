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
      className={`border-l-4 ${
        active ? "border-primary text-primary" : "border-transparent text-secondary"
      } hover:border-primary transition-all pl-3 cursor-pointer hover:text-primary`}
    >
      {children}
    </p>
  );
}
