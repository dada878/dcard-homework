"use client";
import { useEffect, useRef, useState } from "react";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

import { getLoginUserAvatar } from "@/actions/auth";
import useOutside from "@/hooks/useOutside";

import DarkModeToggle from "./darkModeToggle";
import NavbarItem from "./navbarItem";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [avatar, setAvatar] = useState<string | undefined>();
  const navbarRef = useRef(null);

  useOutside(navbarRef, () => {
    setIsMenuOpen(false);
  });

  const handleNavbarItemClick = () => {
    setIsMenuOpen(false);
  };

  // get login user name, if not login, show "登入"
  useEffect(() => {
    getLoginUserAvatar().then((avatar?: string) => {
      setAvatar(avatar);
    });
  });

  return (
    <nav
      ref={navbarRef}
      className="fixed left-0 right-0 top-0 z-20 border-b border-b-secondary-light/20 bg-slate-600/10 p-1 py-4 backdrop-blur-md dark:border-b-[#ffffff3b] dark:bg-white/10 md:py-2"
    >
      {/* Desktop navbar */}
      <div className="mx-auto flex items-center pr-2 md:justify-between md:pl-5 md:pr-4">
        <div className="hidden gap-8 md:flex">
          <NavbarItem name="首頁" url="/" />
          <NavbarItem name="文章" url="/blogs" />
          <NavbarItem
            name={avatar === undefined ? "登入" : "登出"}
            url={
              avatar === undefined ? "/api/auth/signin" : "/api/auth/signout"
            }
          />
        </div>
        <div className="flex gap-3">
          {avatar === undefined ? null : (
            <Image
              src={avatar}
              className="rounded-full"
              alt="logo"
              width={40}
              height={40}
              layout="fixed"
            />
          )}
          <div className="flex flex-1 flex-row-reverse items-center justify-between gap-0 px-4 md:flex-grow-0 md:flex-row md:justify-around md:gap-4 md:px-0">
            <FontAwesomeIcon
              icon={faBars}
              className={`cursor-pointer text-2xl opacity-70 transition md:!hidden ${
                isMenuOpen ? "rotate-90" : ""
              }`}
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            />
            <DarkModeToggle />
          </div>
        </div>
      </div>
      {/* Mobile navbar */}
      <div
        className={`flex flex-col items-center gap-3 overflow-hidden transition-all duration-200 md:hidden ${
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
          name={avatar === undefined ? "登入" : "登出"}
          url="/api/auth/signin"
        />
      </div>
    </nav>
  );
}
