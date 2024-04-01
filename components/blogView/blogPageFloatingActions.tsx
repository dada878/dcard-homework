"use client";

import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import DeleteButton from "./deleteButton";
import LinkButton from "../global/linkButton";
import FloatingActionSection from "../layout/floatingActionSection";

export default function BlogPageFloatingActions({
  showActionButtons,
  postID,
}: Readonly<{
  showActionButtons: boolean;
  postID: string;
}>) {
  return showActionButtons && (
    <FloatingActionSection>
      <LinkButton href={`/blogs/${postID}/edit`} className="rounded-full">
        <div className="p-2">
          <FontAwesomeIcon className="w-5 h-5 shadow-lg" icon={faEdit} />
        </div>
      </LinkButton>
      <DeleteButton id={postID} isMobile />
    </FloatingActionSection>
  );
}
