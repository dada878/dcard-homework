"use client";
import { useEffect, useRef, useState } from "react";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { getLoginUser } from "@/actions/auth";
import useOutside from "@/hooks/useOutside";

import DarkModeToggle from "../global/darkModeToggle";
import NavbarItem from "../global/navbarItem";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState("登入");
  const navbarRef = useRef(null);

  useOutside(navbarRef, () => {
    setIsMenuOpen(false);
  });

  const handleNavbarItemClick = () => {
    setIsMenuOpen(false);
  };

  // get login user name, if not login, show "登入"
  useEffect(() => {
    getLoginUser().then((name?: string) => {
      setUser(name ?? "登入");
    });
  });

  return (
    <nav
      ref={navbarRef}
      className="z-20 p-1 dark:bg-white/10 bg-slate-600/10 py-4 md:py-2 fixed backdrop-blur-md left-0 right-0 top-0 border-b border-b-secondary-light/20 dark:border-b-[#ffffff3b]"
    >
      {/* Desktop navbar */}
      <div className="mx-auto flex md:justify-between items-center md:pl-5 md:pr-4 pr-2">
        <div className="gap-8 hidden md:flex">
          <NavbarItem name="首頁" url="/" />
          <NavbarItem name="文章" url="/blogs" />
          <NavbarItem name={user} url="/api/auth/signin" />
        </div>
        <div className="flex gap-0 justify-between px-4 md:px-0 md:justify-around items-center flex-1 md:flex-grow-0 md:gap-4 flex-row-reverse md:flex-row">
          <FontAwesomeIcon
            icon={faBars}
            className={`text-2xl opacity-70 cursor-pointer transition md:!hidden ${
              isMenuOpen ? "rotate-90" : ""
            }`}
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          />
          <DarkModeToggle />
        </div>
      </div>
      {/* Mobile navbar */}
      <div
        className={`flex flex-col gap-3 transition-all duration-200 items-center md:hidden overflow-hidden ${
          isMenuOpen ? "max-h-40" : "max-h-0"
        }`}
      >
        <NavbarItem
          isMobile
          onClick={handleNavbarItemClick}
          className="mt-3"
          name="首頁"
          url="/"
        />
        <NavbarItem
          isMobile
          onClick={handleNavbarItemClick}
          name="文章"
          url="/blogs"
        />
        <NavbarItem
          isMobile
          onClick={handleNavbarItemClick}
          name={user}
          url="/api/auth/signin"
        />
      </div>
    </nav>
  );
}
