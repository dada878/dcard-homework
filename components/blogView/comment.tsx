import Image from "next/image";
import { ReactNode } from "react";
import { formatDate } from "@/utils/dateFormatter";

export default function Comment({
  userName,
  avatarUrl,
  date,
  children,
}: {
  userName: string;
  avatarUrl: string;
  date: Date;
  children: ReactNode;
}) {
  return <div className="bg-secondary rounded-xl p-6 flex flex-col gap-4">
    <div className="flex items-center gap-3">
      <Image src={avatarUrl} className="rounded-full" width={40} height={40} alt="avatar"/>
      <p className="text-xl">{userName}</p>
      <p className="text-secondary text-sm">{formatDate(date)}</p>
    </div>
    <div>
      {children}
    </div>
  </div>
}