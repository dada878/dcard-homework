"use client";

import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import DeletePostButton from "./deletePostButton";
import FloatingActionSection from "../layout/floatingActionSection";
import LinkButton from "../utilities/linkButton";

export default function BlogPageFloatingActions({
  showActionButtons,
  postID,
}: Readonly<{
  showActionButtons: boolean;
  postID: string;
}>) {
  return (
    showActionButtons && (
      <FloatingActionSection>
        <LinkButton href={`/blogs/${postID}/edit`} className="rounded-full">
          <div className="p-2">
            <FontAwesomeIcon className="h-5 w-5 shadow-lg" icon={faEdit} />
          </div>
        </LinkButton>
        <DeletePostButton id={postID} isMobile />
      </FloatingActionSection>
    )
  );
}
