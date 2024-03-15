import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar() {
    return (
        <div className="bg-gray bg-opacity-30 p-2 rounded-lg items-center flex gap-3 pl-3">
            <FontAwesomeIcon className="cursor-pointer" icon={faSearch} />
            <input type="text" placeholder="Search something..." className="bg-opacity-0 bg-white outline-none" />
        </div>
    );
}