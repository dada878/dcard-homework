import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import TagItem from "../global/tagItem";

export default function CloseableTagItem({
  name,
  onClick,
}: Readonly<{
  name: string;
  onClick?: () => void;
}>) {
  return (
    <TagItem onClick={onClick}>
      <div className="flex items-center justify-center gap-2">
        <p>{name}</p>
        <FontAwesomeIcon icon={faXmark} />
      </div>
    </TagItem>
  );
}
