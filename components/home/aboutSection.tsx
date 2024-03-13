import { ReactNode } from "react";

export default function AboutSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
    return (
        <div>
            <h3>{title}</h3>
            {children}
        </div>
    )
}