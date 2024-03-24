"use client";

import DeleteButton from "./deleteButton";

export default function DeleteButtonClient({
  id,
  isMobile,
}: {
  id: string;
  isMobile?: boolean;
}) {
  return <DeleteButton id={id} isMobile={isMobile} />;
}
