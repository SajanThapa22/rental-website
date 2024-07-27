import React, { useEffect, useState } from "react";

import Button from "./Button";
import background from "../assets/Images/background.png";
import bgMobile from "../assets/Images/bgMobile.png";

import SelectandSearch from "./SelectandSearch";
import SelectSearchResponsive from "./SelectSearchResponsive";

export const buttonDetails = [
  { id: 1, text: "places", bgClr: "bg-clr-white", clr: "text-clr-very-dark" },
  {
    id: 2,
    text: "rides",
    bgClr: "bg-clr-white",
    clr: "text-clr-very-dark",
  },
  {
    id: 3,
    text: "things",
    bgClr: "bg-clr-white",
    clr: "text-clr-very-dark",
  },
];

const DiscoverRental = () => {
  const [placeHolder, setPlaceHolder] = useState("places");
  const [selectedRental, setSelectedRental] = useState("places");

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(
    () => window.addEventListener("resize", () => setWidth(window.innerWidth)),
    []
  );

  return (
    <div
      style={{
        backgroundImage:
          width < 601 ? `url(${bgMobile})` : `url(${background})`,
      }}
      className="relative bg-cover bg-center h-screen py-8 sm:h-dvh w-full grid justify-center items-center"
    >
      <div className="w-full top-1/4 left-1/2 grid items-center justify-center gap-y-10 2xl:gap-y-12">
        <div className="capitalize w-full flex flex-col gap-y-4 2xl:gap-y-8">
          <div
            className={`flex flex-wrap px-3 w-full items-center justify-center ${
              width < 507 ? "text-font-medium" : "text-font-big"
            }  gap-x-3 font-bold`}
          >
            <span className="inline-block">discover your</span>
            <span className="text-clr-primary inline-block">
              perfect rental
            </span>
          </div>

          <p
            className={`text-font-small lg:text-f-20px px-5  text-center capitalize ${
              width < 507 ? "text-font-small" : "font-regular"
            } px-3`}
          >
            rent cars, houses and items in just a few clicks
          </p>
        </div>

        <div className="flex flex-col items-center w-full gap-list-gap px-10">
          <div
            className={`flex gap-gap-16px ${
              width < 507 ? "w-full" : ""
            } justify-center`}
          >
            {buttonDetails.map((b) => (
              <Button
                onClick={() => setSelectedRental(b.text)}
                width={width < 507 ? "w-full" : ""}
                key={b.id}
                text={b.text}
                bgClr={b.text === selectedRental ? `bg-[#dc2626]` : b.bgClr}
                clr={b.text === selectedRental ? `text-white` : b.clr}
                onFocus={() => setPlaceHolder(b.text)}
              />
            ))}
          </div>
          {width < 600 ? (
            <SelectSearchResponsive
              className="w-full"
              placeHolder={placeHolder}
            />
          ) : (
            <SelectandSearch placeHolder={placeHolder} />
          )}
        </div>
      </div>
    </div>
  );
};

export default DiscoverRental;
