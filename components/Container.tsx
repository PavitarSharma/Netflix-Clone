import React from "react";

interface IContainerProps {
  children: React.ReactNode;
  z?: number;
}

const Container = ({ children, z }: IContainerProps) => {
  return (
    <div
      className={`max-w-[1700px] mx-auto px-4 sm:py-[150px] text-white py-[50px] z-[${z}]`}
    >
      {children}
    </div>
  );
};

export default Container;
