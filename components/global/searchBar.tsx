import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar() {
    return (
        <div className="bg-[#6C7693] bg-opacity-30 p-2 rounded-lg items-center flex gap-3 pl-3">
            <FontAwesomeIcon icon={faSearch} />
            <input type="text" placeholder="Search something..." className="d bg-opacity-0 bg-white outline-none" />
        </div>
    );
}