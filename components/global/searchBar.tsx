import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SearchBar({ className }: { className?: string }) {
  return (
    <div
      className={`bg-gray bg-opacity-30 p-2 rounded-lg items-center flex gap-3 pl-3 ${className}`}
    >
      <FontAwesomeIcon className="cursor-pointer" icon={faSearch} />
      <input
        type="text"
        placeholder="Search something..."
        className="bg-opacity-0 bg-white outline-none placeholder:text-secondary-light/50 dark:placeholder:text-white/40"
      />
    </div>
  );
}
