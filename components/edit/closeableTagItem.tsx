import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import TagItem from "../global/tagItem";

export default function CloseableTagItem({
  name,
  onClick,
}: {
  name: string;
  onClick?: () => void;
}) {
  return (
    <TagItem onClick={onClick}>
      <div className="flex justify-center items-center gap-2">
        <p>{name}</p>
        <FontAwesomeIcon icon={faXmark} />
      </div>
    </TagItem>
  );
}
