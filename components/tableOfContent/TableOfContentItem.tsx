import { ReactNode } from "react";

export default function MenuItem({
  children,
  active,
  id,
}: Readonly<{
  children: ReactNode;
  active?: boolean;
  id: string;
}>) {
  // NOTE: classes here maybe too complex
  function scrollToElement(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <button
      onClick={() => scrollToElement(id)}
      className={`border-l-4 text-left ${
        active
          ? "border-black font-bold text-black dark:border-primary dark:text-primary"
          : "border-transparent text-secondary-light dark:text-secondary"
      } line-clamp-1 cursor-pointer pl-3 transition-all hover:border-black hover:font-bold hover:text-black dark:hover:border-primary dark:hover:text-primary`}
    >
      {children}
    </button>
  );
}
