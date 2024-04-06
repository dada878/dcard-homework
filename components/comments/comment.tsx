import { ReactNode } from "react";

import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

import { cn } from "@/utils/cn";
import { formatDate } from "@/utils/dateFormatter";

export default function BlogComment({
  userName,
  avatarUrl,
  date,
  children,
  sending,
}: Readonly<{
  userName: string;
  avatarUrl: string;
  date: Date;
  children: ReactNode;
  sending?: boolean;
}>) {
  return (
    <div
      className={cn(`flex flex-col overflow-hidden gap-4 rounded-xl bg-mirage-200 p-6 dark:bg-mirage-900`,
        {
          "opacity-50": sending,
        }
      )}
    >
      <div className="flex justify-between overflow-scroll">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <Image
              src={avatarUrl}
              className="rounded-full"
              width={40}
              height={40}
              alt="avatar"
            />
            <p className="text-xl">{userName}</p>
            <p className="text-sm text-secondary-light dark:text-secondary">
              {formatDate(date)}
            </p>
          </div>
          <div>{children}</div>
        </div>
        {sending && (
          <FontAwesomeIcon className="size-6 animate-spin" icon={faSpinner} />
        )}
      </div>
    </div>
  );
}
