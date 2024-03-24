"use client";

import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { redirect, useRouter, useSearchParams } from "next/navigation";
import { ReactNode } from "react";

export default function TagItem({
  onClick,
  name,
  selected,
  clickToRedirect,
  hasCloseButton,
}: {
  onClick?: () => void;
  name: string;
  selected?: boolean;
  clickToRedirect?: boolean;
  hasCloseButton?: boolean;
}) {
  const router = useRouter();
  const params = useSearchParams();
  const tags = params.get("tags")?.split(",") || [];
  return (
    <span
      onClick={
        clickToRedirect
          ? () => {
              if (selected) {
                tags.splice(tags.indexOf(name), 1);
              } else {
                tags.push(name);
              }
              const searchParams = new URLSearchParams();
              searchParams.set("tags", tags.join(","));
              router.push(`blogs?${searchParams.toString()}`);
            }
          : onClick
      }
      className={`dark:bg-mirage-700 bg-mirage-400 py-1 px-2 text-secondary-light dark:text-secondary rounded-md cursor-pointer transition hover:bg-mirage-500 dark:hover:bg-mirage-600 hover:text-black dark:hover:text-primary ${
        selected ? "outline outline-1 outline-mirage-500" : ""
      }`}
    >
      {hasCloseButton ? (
        <div className="flex justify-center items-center gap-2">
          <p>{name}</p>
          <FontAwesomeIcon icon={faXmark} />
        </div>
      ) : (
        <>{name}</>
      )}
    </span>
  );
}
