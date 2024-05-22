import React from "react";
import Decorators from "./Decorators";

const SectionTitle = ({ title }) => {
  return (
    <div className="flex flex-col gap-g-16px md:gap-g-18px items-center">
      <div>
        <p className="text-center text-font-24px font-bold md:text-font-medium text-clr-very-dark  capitalize">
          {title}
        </p>
      </div>
      <div>
        <Decorators soWidth="w-3" boWidth="w-16" height="h-1" />
      </div>
    </div>
  );
};

export default SectionTitle;
