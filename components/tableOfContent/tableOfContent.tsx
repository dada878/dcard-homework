import { useEffect, useState, ReactNode } from "react";

import { useMotionValueEvent, useScroll } from "framer-motion";

import Card from "../utilities/card";

type Headings = {
  id: string;
  text: string;
}[];

export default function TableOfContent({
  selector,
}: Readonly<{ selector: string }>) {
  const [headings, setHeadings] = useState<Headings>([]);
  const [activeHeading, setActiveHeading] = useState<string>("heading-0");
  const { scrollY } = useScroll();

  // get all headings and set their unique id
  useEffect(() => {
    const elements: Array<HTMLElement> = Array.from(
      document.querySelectorAll(selector),
    );
    elements.forEach((elem, idx) => {
      elem.id = `heading-${idx}`;
      elem.style.scrollMarginTop = "5rem";
    });
    setHeadings(
      Array.from(
        elements.map((elem) => ({
          id: elem.id,
          text: elem.innerText,
        })),
      ),
    );
  }, [selector]);

  useMotionValueEvent(scrollY, "change", () => {
    const scrollY = document.documentElement.scrollTop;
    for (const heading of headings.toReversed()) {
      const currentHeading: HTMLElement = document.getElementById(heading.id)!;
      if (scrollY + 100 > currentHeading?.offsetTop) {
        setActiveHeading(heading.id);
        return;
      }
    }
  });

  return (
    <Card>
      <h3 className="mb-4 text-center text-2xl font-bold">文章目次</h3>
      <div className="flex flex-col gap-2">
        {headings.length > 0 ? (
          headings.map((heading) => (
            <TableOfContentItem
              key={heading.id}
              id={heading.id}
              active={activeHeading === heading.id}
            >
              {heading.text}
            </TableOfContentItem>
          ))
        ) : (
          <p className="text-center opacity-50">(這篇文章沒有任何標題)</p>
        )}
      </div>
    </Card>
  );
}

function TableOfContentItem({
  children,
  active,
  id,
}: Readonly<{
  children: ReactNode;
  active?: boolean;
  id: string;
}>) {
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
