import useDropdown from "@/hooks/useDropdown";
import { navLinks } from "@/utils/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useCallback } from "react";

const MobileMenu = () => {
  const pathname = usePathname();
  const menuDropdown = useDropdown();

  const handleClick = useCallback(() => {
    menuDropdown.handleClose();
  }, [menuDropdown]);

  return (
    <div
      className="
    relative
    w-[200px]
    z-10 
    h-auto
    border-t
  border-t-white
    before:content-['']
    before:absolute
    before:inset-0
  before:bg-black
    before:bg-opacity-40
    before:z-[-5]
    "
    >
      <div className="flex flex-col">
        {navLinks.map((link) => (
          <Link
            href={link.path}
            key={link.id}
            onClick={handleClick}
            className={`w-full text-[12px] cursor-pointer hover:text-white transition hover:bg-neutral-800/70 text-center py-2 ${
              pathname === link.path ? "text-white" : "text-gray-300"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
