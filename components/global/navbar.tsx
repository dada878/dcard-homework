"use client";
import NavbarItem from "./navbarItem";
import SearchBar from "./searchBar";
import Switch from "react-switch";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [checked, setChecked] = useState(false);
  return (
    <nav className="z-20 p-1 bg-white bg-opacity-10 sticky backdrop-blur-md left-0 right-0 top-0 border-b border-b-[#ffffff3b]">
      <div className="mx-auto flex justify-between items-center pl-5 pr-3">
        <div className="flex gap-3">
          <NavbarItem name="Home" url="/" />
          <NavbarItem name="Blogs" url="/blogs" />
          <NavbarItem name="Log in" url="/blogs" />
        </div>
        <div className="flex gap-4 items-center">
          <SearchBar />
          <Switch
            className="scale-125"
            onChange={setChecked}
            checked={checked}
            offColor="#51586d"
            onColor="#f4cd8c"
            onHandleColor="#eea950"
            offHandleColor="#6c7693"
            boxShadow="0px 0px 0px 0px #000000"
            activeBoxShadow="0px 0px 0px 0px #000000"
            checkedHandleIcon={
              <div className="flex justify-center items-center h-full">
                <FontAwesomeIcon icon={faSun} />
              </div>
            }
            uncheckedHandleIcon={
              <div className="flex justify-center items-center h-full">
                <FontAwesomeIcon icon={faMoon} />
              </div>
            }
            checkedIcon={<div></div>}
            uncheckedIcon={<div></div>}
          />
        </div>
      </div>
    </nav>
  );
}
