import { ReactNode } from "react";

export default function TagItem({ children }: { children: ReactNode }) {
  return (
    <span className="bg-mirage-700 py-1 px-2 text-secondary rounded-md cursor-pointer transition hover:bg-mirage-600 hover:text-primary">
      {children}
    </span>
  );
}
