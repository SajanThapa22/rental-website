import React from "react";
import Decorators from "./Decorators";

const BrowseCategories = () => {
  return (
    <div className="mt-mt-50 flex flex-col justify-center items-center">
      <div>
        <p className="text-font-medium font-bold capitalize">
          browse from top categories
        </p>
      </div>
      <Decorators soWidth="w-6" boWidth="w-16" height="h-2" />
    </div>
  );
};

export default BrowseCategories;
