"use client";

import DeleteButton from "./deleteButton";

export default function DeleteButtonClient({
  id,
  post,
  isMobile,
}: {
  id: string;
  post: any;
  isMobile?: boolean;
}) {
  return <DeleteButton id={id} post={post} isMobile={isMobile} />;
}
