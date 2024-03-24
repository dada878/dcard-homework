import { ReactNode } from "react";

export default function FloatingActionSection({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="fixed bottom-6 right-6 md:hidden">
      <div className="flex flex-col gap-4">{children}</div>
    </div>
  );
}
