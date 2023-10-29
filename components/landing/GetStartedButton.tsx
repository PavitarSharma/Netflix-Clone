import React from "react";
import { MdChevronRight } from "react-icons/md";

interface GetStartedButtonProps {
  onClick: () => void;
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ onClick }) => {
  return (
    <div>
      <button
        className="bg-red-600 md:w-full h-full mx-auto hover:bg-red-700 transition cursor-pointer text-white font-medium md:py-2 py-3 px-4 rounded-md flex items-center justify-center text-xl"
        onClick={onClick}
      >
        <span>Get Started</span>
        <MdChevronRight size={28} />
      </button>
    </div>
  );
};

export default GetStartedButton;
