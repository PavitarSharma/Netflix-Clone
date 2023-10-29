import Link from "next/link";
import React from "react";

interface NavbarItemProp {
  label: string;
  route: string;
  active?: boolean;
}

const NavbarItem = ({ label, route, active }: NavbarItemProp) => {
  return (
    <Link
      href={route}
      className={`text-[12px] cursor-pointer hover:text-white transition ${
        active ? "text-white" : "text-gray-300"
      }`}
    >
      {label}
    </Link>
  );
};

export default NavbarItem;
