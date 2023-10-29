"use client";

import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

type SearchProps = {
  value: string;
  onChange: (e: any) => void;
};

const Search = ({ value, onChange }: SearchProps) => {
  return (
    <div className="relative flex items-center border border-white h-9 gap-2 pl-2 transition">
      <AiOutlineSearch size={26} />
      <input
        type="text"
        id="search"
        value={value}
        onChange={onChange}
        className="
        h-full 
        flex-1
        bg-transparent 
        placeholder:text-[12px] 
        placeholder:font-medium
        mb-1
        border-0
        outline-0
        text-sm
        "
        placeholder="Title, people, genres"
      />
    </div>
  );
};

export default Search;
