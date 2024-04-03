"use client";

import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import DeleteButton from "./deletePostButton";
import FixedSidebar from "../layout/fixedSidebar";
import TableOfContent from "../tableOfContent/tableOfContent";
import LinkButton from "../utilities/linkButton";

export default function BlogPageSidebar({
  showActionButtons,
  postID,
}: Readonly<{
  showActionButtons: boolean;
  postID: string;
}>) {
  return (
    <FixedSidebar>
      {showActionButtons && (
        <>
          <LinkButton href={`/blogs/${postID}/edit`}>
            <div className="flex items-center justify-center gap-4">
              <FontAwesomeIcon className="w-4" icon={faEdit} />
              <span>編輯文章</span>
            </div>
          </LinkButton>
          <DeleteButton id={postID} />
        </>
      )}
      <TableOfContent selector=".prose h1" />
    </FixedSidebar>
  );
}
