import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TagItem from "../global/tagItem";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

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
