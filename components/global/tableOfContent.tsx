import { useEffect, useState } from "react";

import { useMotionValueEvent, useScroll } from "framer-motion";

import MenuItem from "../blogView/menuItem";

type Headings = {
  id: string;
  text: string;
}[];

export default function TableOfContent({ selector }: { selector: string }) {
  const [headings, setHeadings] = useState<Headings>([]);
  const [activeHeading, setActiveHeading] = useState<string>("heading-0");
  const { scrollY } = useScroll();

  // get all headings and set their unique id
  useEffect(() => {
    const elements: Array<HTMLElement> = Array.from(
      document.querySelectorAll(selector)
    );
    elements.forEach((elem, idx) => {
      elem.id = `heading-${idx}`;
    });
    setHeadings(
      Array.from(
        elements.map((elem) => ({
          id: elem.id,
          text: elem.innerText,
        }))
      )
    );
  }, [selector]);

  // NOTE: maybe there is a better way to handle this
  useMotionValueEvent(scrollY, "change", () => {
    const scrollY = document.documentElement.scrollTop;
    for (const heading of headings) {
      const currentHeading: HTMLElement = document.getElementById(heading.id)!;
      if (scrollY <= currentHeading?.offsetTop - 40) {
        setActiveHeading(heading.id);
        return;
      }
    }
  });

  function scrollToElement(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="dark:bg-mirage-900 bg-mirage-200 rounded-xl p-4">
      <h3 className="font-bold text-2xl text-center mb-4">文章目錄</h3>
      <div className="flex flex-col gap-2">
        {headings.map((heading) => (
          <MenuItem
            key={heading.id}
            active={activeHeading === heading.id}
            onClick={() => scrollToElement(heading.id)}
          >
            {heading.text}
          </MenuItem>
        ))}
      </div>
    </div>
  );
}
