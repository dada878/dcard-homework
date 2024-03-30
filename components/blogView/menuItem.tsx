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
          ? "dark:border-primary border-black font-bold text-black dark:text-primary"
          : "border-transparent dark:text-secondary text-secondary-light"
      } dark:hover:border-primary hover:border-black transition-all pl-3 cursor-pointer hover:text-black dark:hover:text-primary hover:font-bold line-clamp-1`}
    >
      {children}
    </button>
  );
}
