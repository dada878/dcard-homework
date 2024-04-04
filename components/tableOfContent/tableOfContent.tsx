import { useEffect, useState } from "react";

import { useMotionValueEvent, useScroll } from "framer-motion";

import TableOfContentItem from "@/components/tableOfContent/TableOfContentItem";

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
    headings.length > 0 && (
      <Card>
        <h3 className="mb-4 text-center text-2xl font-bold">文章目錄</h3>
        <div className="flex flex-col gap-2">
          {headings.map((heading) => (
            <TableOfContentItem
              key={heading.id}
              id={heading.id}
              active={activeHeading === heading.id}
            >
              {heading.text}
            </TableOfContentItem>
          ))}
        </div>
      </Card>
    )
  );
}
