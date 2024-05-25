import React from "react";

const CategoriesSelector = ({ text, svg, bgClr }) => {
  return (
    <div className="rounded-btn-radius text-left p-1 pr-5 gap-2 border border-gray-bg flex flex-1 lg:flex-none items-center">
      <div
        className={`rounded-full flex justify-center items-center aspect-square ${bgClr} w-w-55px`}
      >
        {svg}
      </div>
      <div>
        <p className="text-font-regular text-center text-clr-very-dark text-nowrap capitalize">
          {text}
        </p>
      </div>
    </div>
  );
};

export default CategoriesSelector;
