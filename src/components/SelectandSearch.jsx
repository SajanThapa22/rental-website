import React from "react";
import SearchBar from "./SearchBar";
import DropdownMenu from "./DropdownMenu";

import Search from "../assets/SVGs/search.svg?react";

const SelectandSearch = ({ placeHolder }) => {
  return (
    <div className="w-full px-4 py-3 gap-6 relative rounded-btn-radius justify-between flex items-center bg-clr-white">
      <div className="h-full absolute w-width-1px bg-clr-very-light left-1/2 transform -translate-x-1/2 hidden md:block"></div>

      <SearchBar placeHolder={placeHolder} />

      <div className="h-full flex items-center gap-6">
        <DropdownMenu />
        <div className="rounded-full bg-clr-primary aspect-square flex items-center p-2">
          <Search className="text-clr-white" />
        </div>
      </div>
    </div>
  );
};

export default SelectandSearch;
