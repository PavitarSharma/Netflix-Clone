import React from "react";

interface FeatureProps {
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col md:items-start items-center">
      <h1 className="md:text-5xl text-[2rem] leading-[50px] font-bold mb-4">{title}</h1>
      <p className="md:text-2xl text-lg md:text-start text-center">
        {description}
      </p>
    </div>
  );
};

export default Feature;
