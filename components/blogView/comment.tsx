import { ReactNode } from "react";

import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

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
      className={`dark:bg-mirage-900 bg-mirage-200 rounded-xl p-6 flex flex-col gap-4 ${
        sending && "opacity-50"
      }`}
    >
      <div className="flex justify-between">
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
            <p className="dark:text-secondary text-secondary-light text-sm">
              {formatDate(date)}
            </p>
          </div>
          <div>{children}</div>
        </div>
        {sending && <FontAwesomeIcon
            className="animate-spin size-6"
            icon={faSpinner}
          />}
      </div>
    </div>
  );
}
