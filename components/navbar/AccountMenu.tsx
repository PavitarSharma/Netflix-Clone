import Image from "next/image";
import { PiPencilLight } from "react-icons/pi";
import { RiFolderTransferLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineHelpOutline } from "react-icons/md";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

interface AccountMenuProp {
  onClose: () => void;
}
const AccountMenu = ({ onClose }: AccountMenuProp) => {
  const router = useRouter();
  const toggleMenu = () => {
    onClose();
  };

  return (
    <div
      className="
    relative 
      h-auto
      w-[200px]
      z-10 
      
      
      before:content-['']
      before:absolute
      before:inset-0
      before:bg-black
      before:md:bg-opacity-50
      before:z-[-5]
    "
    >
      <div className="flex items-center gap-2 pt-3 px-3 pb-2">
        <Image
          src="/images/default-red.png"
          alt="profile"
          width={28}
          height={28}
          className="rounded"
        />

        <p className="text-sm">Children</p>
      </div>

      <div className="divide-x-1 bg-neutral-600 h-[1px]" />

      <div className="px-2 py-4">
        <div
          onClick={toggleMenu}
          className="flex items-center gap-2 cursor-pointer group pb-2"
        >
          <PiPencilLight size={24} className="text-neutral-300" />
          <span className="text-sm group-hover:underline">Manage Profile</span>
        </div>
        <div
          onClick={toggleMenu}
          className="flex items-center gap-2 cursor-pointer group pb-2"
        >
          <RiFolderTransferLine size={24} className="text-neutral-300" />
          <span className="text-sm group-hover:underline">Transfer Files</span>
        </div>
        <div
          onClick={toggleMenu}
          className="flex items-center gap-2 cursor-pointer group pb-2"
        >
          <FaRegUser size={24} className="text-neutral-300" />
          <span className="text-sm group-hover:underline">Account</span>
        </div>
        <div
          onClick={toggleMenu}
          className="flex items-center gap-2 cursor-pointer group pb-2"
        >
          <MdOutlineHelpOutline size={24} className="text-neutral-300" />
          <span className="text-sm group-hover:underline">Help Center</span>
        </div>
      </div>

      <div className="divide-x-1 bg-neutral-600 h-[1px]" />

      <p
        onClick={() => {
          signOut();
          router.push("/auth");
          toggleMenu();
        }}
        className="text-center text-[12px] py-4 hover:underline cursor-pointer"
      >
        Sign out of Netflix
      </p>
    </div>
  );
};

export default AccountMenu;
