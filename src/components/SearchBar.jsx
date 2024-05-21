import React from "react";
import Search from "../assets/search.svg?react";

const SearchBar = ({ placeHolder }) => {
  return (
    <div className=" flex gap-2 w-full">
      <Search className="text-clr-light" />
      <input
        type="text"
        placeholder={`Search for ${placeHolder}`}
        className=" focus:outline-none w-full font-light text-font-small bg-right-right"
      />
    </div>
  );
};

export default SearchBar;
