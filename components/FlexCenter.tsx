import React, { HTMLProps, ReactNode } from "react";

interface IFlexCenterProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode;
}

const FlexCenter: React.FC<IFlexCenterProps> = ({
  children,
  ...rest
}) => {
  return (
    <div
      className={`flex md:flex-row flex-col justify-center items-center gap-8 md:w-1/2 w-full`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default FlexCenter;
