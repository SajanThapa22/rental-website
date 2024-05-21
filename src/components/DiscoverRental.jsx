import React, { useState } from "react";

import Button from "./Button";
import background from "../assets/background.png";

import SelectandSearch from "./SelectandSearch";
import SelectSearchResponsive from "./SelectSearchResponsive";

export const buttonDetails = [
  { id: 1, text: "places", bgClr: "bg-clr-primary", clr: "text-clr-white" },
  { id: 2, text: "rides", bgClr: "bg-clr-white", clr: "text-clr-very-dark" },
  { id: 3, text: "things", bgClr: "bg-clr-white", clr: "text-clr-very-dark" },
];

const DiscoverRental = () => {
  const [placeHolder, setPlaceHolder] = useState("cars, houses and more..");

  const [width, setWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => setWidth(window.innerWidth));

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
      }}
      className="relative bg-cover bg-center h-screen py-8 sm:h-dvh w-full grid justify-center items-center"
    >
      <div className="w-full top-1/4 left-1/2 grid items-center justify-center gap-list-gap">
        <div className="capitalize w-full gap-y-gap-16px">
          <div className="flex flex-wrap w-full items-center justify-center text-font-big gap-x-3 font-bold">
            <span className="inline-block">discover your</span>
            <span className="text-clr-primary inline-block">
              perfect rental
            </span>
          </div>

          <p className="text-font-20px  text-center capitalize font-regular px-3">
            rent cars, houses and items in just a few clicks
          </p>
        </div>

        <div className="flex flex-col items-center w-full gap-list-gap px-p-25px">
          <div className="w-full flex gap-gap-16px justify-center">
            {buttonDetails.map((b) => (
              <Button
                key={b.id}
                text={b.text}
                bgClr={b.bgClr}
                clr={b.clr}
                onFocus={() => setPlaceHolder(b.text)}
                onBlur={() => setPlaceHolder("cars, houses and more..")}
              />
            ))}
          </div>
          {width < 507 ? (
            <SelectSearchResponsive
              className="w-full"
              placeHolder={placeHolder}
            />
          ) : (
            <SelectandSearch placeHolder={placeHolder} />
          )}
        </div>
        {/* <div className="h-96 "></div> */}
      </div>
    </div>
  );
};

export default DiscoverRental;
