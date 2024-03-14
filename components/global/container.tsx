import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col gap-5 ml-80 p-10 max-w-4xl w-4/6">{children}</div>
  );
}
