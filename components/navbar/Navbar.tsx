"use client";

import Image from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";
import Search from "../Search";
import useDropdown from "@/hooks/useDropdown";
import AccountMenu from "./AccountMenu";
import NavbarItem from "./NavbarItem";
import { navLinks } from "@/utils/data";
import MobileMenu from "./MobileMenu";

const TOP_OFFSET = 66;

const Navbar = () => {
  const pathname = usePathname();
  const [search, setSearch] = useState("");
  const [showBackground, setShowBackground] = useState(false);
  const searchDropdown = useDropdown();
  const profileDropdown = useDropdown();
  const menuDropdown = useDropdown();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`w-full fixed top-0 left-0 right-0 z-[1000]`}>
      <div
        className={`md:px-12 px-4 py-5 flex items-center justify-between duration-500 z-50 ${
          showBackground ? "bg-zinc-900 bg-opacity-90" : ""
        }`}
      >
        <div className="flex items-center gap-4">
          <Link href="/browse">
            <Image src="/images/logo.png" alt="logo" width={100} height={100} />
          </Link>

          <div className="space-x-2 md:block hidden">
            {navLinks.map((link) => (
              <NavbarItem
                key={link.id}
                route={link.path}
                label={link.name}
                active={pathname === link.path}
              />
            ))}
          </div>

          <div className="md:hidden block cursor-pointer relative">
            <div
              onClick={menuDropdown.handleOpen}
              className="flex items-center gap-2"
            >
              <span className="text-sm">Browse</span>
              <FaCaretDown />
            </div>

            {menuDropdown.isOpen && (
              <div ref={menuDropdown.dropdownRef} className="absolute top-8">
                <MobileMenu />
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            {!searchDropdown.isOpen && (
              <button onClick={searchDropdown.handleOpen} className="mt-1">
                <AiOutlineSearch size={24} />
              </button>
            )}
            {searchDropdown.isOpen ? (
              <div
                ref={searchDropdown.dropdownRef}
                className={`transition duration-300 absolute -translate-x-56 top-1/2 -translate-y-1/2`}
              >
                <Search
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            ) : null}
          </div>
          <div>
            <button className="mt-1">
              <IoNotificationsOutline size={24} />
            </button>
          </div>
          <div className="relative">
            <div
              onClick={profileDropdown.handleOpen}
              className="flex items-center gap-2 cursor-pointer relative"
            >
              <Image
                src="/images/default-blue.png"
                alt="profile"
                width={30}
                height={30}
                className="rounded"
              />
              <FaCaretDown className="md:block hidden" />
            </div>
            {profileDropdown.isOpen ? (
              <div
                ref={profileDropdown.dropdownRef}
                className={`transition duration-300 absolute -left-36 top-10`}
              >
                <AccountMenu onClose={() => profileDropdown.handleClose()} />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
