import React from "react";
import CategoriesSelector from "./CategoriesSelector";
import Compass from "../assets/SVGs/compass.svg?react";
import Home from "../assets/SVGs/home.svg?react";
import More from "../assets/SVGs/more.svg?react";
import ThumbsUp from "../assets/SVGs/thumbsUp.svg?react";
import DollarSign from "../assets/SVGs/dollarSign.svg?react";
import SectionTitle from "./SectionTitle";

const BrowseCategories = () => {
  return (
    <div className="mt-mt-50 flex flex-col md:px-20 px-4 gap-g-24px md:gap-g-32px lg:gap-g-40px justify-center items-center">
      <SectionTitle title="browse from top categories" />

      <div className=" px-1 grid grid-cols-1 gap-4 md:flex flex-wrap  w-full items-center justify-between">
        <CategoriesSelector
          text="Holiday Rentals"
          svg={<ThumbsUp className="w-6 aspect-square" />}
          bgClr="bg-pink-bg"
        />
        <CategoriesSelector
          text="Residental spaces"
          svg={<Home className="w-6 aspect-square " />}
          bgClr="bg-green-bg"
        />
        <CategoriesSelector
          text="event spaces"
          svg={<Compass className="w-6 aspect-square" />}
          bgClr="bg-purple-bg"
        />
        <CategoriesSelector
          text="commercial properties"
          svg={<DollarSign className="w-6 aspect-square" />}
          bgClr="bg-blue-bg"
        />
        <CategoriesSelector
          text="more.."
          svg={<More className="w-8" />}
          bgClr="bg-pink-bg"
        />
      </div>
    </div>
  );
};

export default BrowseCategories;
