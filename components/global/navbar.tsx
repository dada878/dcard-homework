import NavbarItem from "./navbarItem";
import SearchBar from "./searchBar";

export default function Navbar() {
    return (
        <nav className="z-20 p-1 bg-white bg-opacity-10 sticky backdrop-blur-md left-0 right-0 top-0 border-b border-b-[#ffffff3b]">
            <div className="mx-auto flex justify-between items-center px-5">
                <div className="flex gap-3">
                    <NavbarItem name="Home" url="/" />
                    <NavbarItem name="Blogs" url="/blogs" />
                    <NavbarItem name="Log in" url="/blogs" />
                </div>
                <SearchBar />
            </div>
        </nav>
    )
}