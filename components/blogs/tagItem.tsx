import { ReactNode } from "react";

export default function TagItem({children} : {children: ReactNode}) {
    return (
        <span className="bg-light py-1 px-2 text-secondary hover:text-primary rounded-md cursor-pointer hover:bg-opacity-100 bg-opacity-70 transition">
            {children}
        </span>
    );
}