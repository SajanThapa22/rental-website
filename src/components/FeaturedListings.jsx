import React from "react";
import SectionTitle from "./SectionTitle";
import Button from "./Button";

import ArrowDown from "../assets/arrowdown.svg?react";
import CardsContainer from "./CardsContainer";

const buttonDetails = [
  {
    id: 1,
    text: "all items (5125)",
    bgClr: "bg-clr-primary",
    clr: "text-clr-white",
  },
  {
    id: 2,
    text: "residental spaces (64)",
    bgClr: "bg-gray-bg",
    clr: "text-light-black",
  },
  {
    id: 3,
    text: "sports venues",
    bgClr: "bg-gray-bg",
    clr: "text-light-black",
  },
  {
    id: 4,
    text: "meeting spaces",
    bgClr: "bg-gray-bg",
    clr: "text-light-black",
  },
  { id: 5, text: "vans & buses", bgClr: "bg-gray-bg", clr: "text-light-black" },
  {
    id: 6,
    text: "cars and SUVs",
    bgClr: "bg-gray-bg",
    clr: "text-light-black",
  },
  {
    id: 7,
    text: "Lorries & industrial vehicles",
    bgClr: "bg-gray-bg",
    clr: "text-light-black",
  },
];

const FeaturedListings = () => {
  return (
    <div className="mt-mt-50 md:px-20 px-4 flex flex-col gap-g-24px md:gap-g-32px lg:gap-g-40px">
      <SectionTitle title="featured listings" />
      <div className="flex gap-3 text-nowrap overflow-x-scroll hide-scrollbar">
        {buttonDetails.map((b) => (
          <Button key={b.id} text={b.text} bgClr={b.bgClr} clr={b.clr} />
        ))}

        <div
          id="icon-div"
          className="flex-shrink-0 size-10 overflow-hidden rounded-full flex justify-center items-center  bg-gray-bg "
        >
          <ArrowDown className="size-6 text-light-black" />
        </div>
      </div>

      <CardsContainer />
    </div>
  );
};

export default FeaturedListings;
