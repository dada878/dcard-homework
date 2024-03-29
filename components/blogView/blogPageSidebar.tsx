"use client";

import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LinkButton from "../global/linkButton";
import FixedSidebar from "../layout/fixedSidebar";
import DeleteButton from "./deleteButton";
import TableOfContent from "./tableOfContent";

export default function BlogPageSidebar({
  showActionButtons,
  postID,
}: {
  showActionButtons: boolean;
  postID: string;
}) {
  return (
    <FixedSidebar>
      {showActionButtons && (
        <>
          <LinkButton href={`/blogs/${postID}/edit`}>
            <div className="flex gap-4 justify-center items-center">
              <FontAwesomeIcon className="w-4" icon={faEdit} />
              <span>編輯文章</span>
            </div>
          </LinkButton>
          <DeleteButton id={postID} />
        </>
      )}
      <TableOfContent selector="h1" />
    </FixedSidebar>
  );
}
