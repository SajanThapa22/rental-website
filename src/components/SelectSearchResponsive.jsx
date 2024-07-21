import React from "react";
import SearchBar from "./SearchBar";
import DropdownMenu from "./DropdownMenu";

import Search from "../assets/SVGs/search.svg?react";

const SelectSearchResponsive = ({ placeHolder }) => {
  return (
    <div className=" w-full gap-3 relative justify-between flex flex-col items-center text-font-small font-light">
      <div className="bg-clr-white w-full flex items-center justify-center px-8 py-3 rounded-btn-radius">
        <SearchBar placeHolder={placeHolder} />
      </div>

      <div className="rounded-btn-radius bg-clr-white w-full h-full flex justify-center items-center gap-6 px-8 py-3">
        <DropdownMenu />
      </div>

      <div className="rounded-btn-radius w-full bg-clr-primary flex justify-center items-center gap-2 px-8 py-4 font-bold text-clr-white cursor-pointer">
        <Search className="text-clr-white w-5 aspect-square" />
        <p>Search Now</p>
      </div>
    </div>
  );
};

export default SelectSearchResponsive;
