"use client";
import SearchBar from "./searchBar";
import NavbarItem from "./navbarItem";
import DarkModeToggle from "./darkModeToggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="z-20 p-1 bg-white bg-opacity-10 py-2 md:py-2 fixed backdrop-blur-md left-0 right-0 top-0 border-b border-b-[#ffffff3b]">
      <div className="mx-auto flex md:justify-between items-center md:pl-5 md:pr-4 pr-2">
        <div className="gap-3 hidden md:flex">
          <NavbarItem name="Home" url="/" />
          <NavbarItem name="Blogs" url="/blogs" />
          <NavbarItem name="Log in" url="/blogs" />
        </div>
        <div className="flex gap-0 justify-around items-center flex-1 md:flex-grow-0 md:gap-4 flex-row-reverse md:flex-row">
          <FontAwesomeIcon icon={faBars} className="text-2xl opacity-70 cursor-pointer md:hidden" onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }} />
          <SearchBar className="md:w-auto w-3/5 overflow-hidden" />
          <DarkModeToggle />
        </div>
      </div>
      <div className={`flex flex-col gap-3 transition-all duration-200 items-center md:hidden overflow-hidden ${isMenuOpen ? "max-h-40" : "max-h-0"}`}>
        <NavbarItem isMobile className="mt-3" name="Home" url="/" />
        <NavbarItem isMobile name="Blogs" url="/blogs" />
        <NavbarItem isMobile name="Log in" url="/blogs" />
      </div>
    </nav>
  );
}
