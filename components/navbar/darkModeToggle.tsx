"use client";

import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";

import { cn } from "@/utils/cn";

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className="relative hidden h-10 w-20 cursor-pointer rounded-full bg-[#f4ce8c74] md:block dark:bg-[#51586d5f]"
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
    >
      <span
        className={cn(
          "absolute bottom-1/2 left-0 size-10 translate-y-1/2 rounded-full bg-[#f4cd8c] transition-all dark:left-10 dark:bg-[#51586d]",
        )}
      >
        <FontAwesomeIcon
          icon={faSun}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#eea950] dark:hidden "
        />
        <FontAwesomeIcon
          icon={faMoon}
          className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 text-white dark:block"
        />
      </span>
    </div>
  );
}
