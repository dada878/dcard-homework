import { ReactNode } from "react";

export default function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <main
      className={`flex flex-col gap-5 ml-0 md:ml-64 lg:ml-80 p-6 md:p-10 max-w-screen lg:max-w-[min(calc(100vw_-_19rem),56rem)] w-auto lg:w-4/6 ${className}`}
    >
      {children}
    </main>
  );
}
