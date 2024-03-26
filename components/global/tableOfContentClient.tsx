"use client";
import TableOfContent from "./tableOfContent";

export default function TableOfContentClient({
  selector,
} : {
  selector : string;
}) {
  return (
    <TableOfContent selector={selector} />
  );
}