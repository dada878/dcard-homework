import { ReactNode } from "react";

export default function Container({
  children,
  className,
  width = "w-auto",
}: Readonly<{
  children: ReactNode;
  className?: string;
  width?: string;
}>) {
  return (
    <main
      // NOTE: too complex
      className={`flex flex-col gap-5 ml-0 md:ml-64 ${width} lg:ml-80 p-6 md:p-10 max-w-screen lg:max-w-[min(calc(100vw_-_19rem),56rem)] md:max-w-[min(calc(100vw_-_16rem),56rem)] lg:w-4/6 ${className}`}
    >
      {children}
    </main>
  );
}
