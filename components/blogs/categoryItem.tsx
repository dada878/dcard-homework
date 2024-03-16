import { ReactNode } from "react";

export default function CategoryItem({
  children,
  count,
}: {
  children: ReactNode;
  count: number;
}) {
  return (
    <div className="flex justify-between text-secondary-light dark:text-secondary cursor-pointer py-2 transition hover:text-black dark:hover:text-primary">
      {children}
      {/* TODO: make border color white when hove */}
      <div className="flex-1 border-b dark:border-b-secondary border-b-secondary-light mx-2 -translate-y-1/2"></div>
      <p>{count} 篇</p>
    </div>
  );
}
