import { ReactNode } from "react";

export default function AboutSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
    return (
        <div className="flex-1 bg-opacity-10 p-10 rounded-xl flex flex-col gap-5">
            <h3 className="text-3xl font-bold">{title}</h3>
            <div>
              {children}
            </div>
        </div>
    )
}