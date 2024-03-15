import { ReactNode } from "react";

export default function TagItem({ children }: { children: ReactNode }) {
  return (
    <span className="bg-light py-1 px-2 text-secondary rounded-md cursor-pointer bg-opacity-70 transition hover:bg-opacity-100 hover:text-primary">
      {children}
    </span>
  );
}
