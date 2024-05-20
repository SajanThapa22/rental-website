import React, { useState, useEffect, useRef } from "react";
import background from "../assets/background.png";
import Search from "../assets/search.svg?react";
import Button from "./Button";
import Location from "../assets/location.svg?react";
import ArrowDown from "../assets/arrowdown.svg?react";

export const buttonDetails = [
  { id: 1, text: "places", bgClr: "bg-clr-primary", clr: "text-clr-white" },
  { id: 2, text: "rides", bgClr: "bg-clr-white", clr: "text-clr-very-dark" },
  { id: 3, text: "things", bgClr: "bg-clr-white", clr: "text-clr-very-dark" },
];

export const locations = [
  { id: 1, text: "Pokhara" },
  { id: 2, text: "Kathmandu" },
  { id: 3, text: "Narayanghad" },
  { id: 4, text: "Baglung" },
  { id: 5, text: "Dhading" },
];

const DiscoverRental = () => {
  const [placeHolder, setPlaceHolder] = useState("places rides things");
  const [location, setLocation] = useState("");

  const [isArrowDown, setArrowDown] = useState(false);
  const [dropDirection, setDropDirection] = useState("");
  const dropdownRef = useRef();

  useEffect(() => {
    if (dropdownRef.current) {
      const rect = dropdownRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      const spaceAbove = rect.top;
      if (spaceBelow < 10 && spaceAbove > spaceBelow) {
        console.log("first");
        setDropDirection("up");
      } else {
        setDropDirection("down");
      }
    }
  }, [isArrowDown]);
  console.log("second");
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
      }}
      className="relative bg-cover bg-center h-screen sm:h-dvh  "
    >
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 flex flex-col gap-list-gap">
        <div className="capitalize w-full gap-gap-16px flex flex-col items-center">
          <div className="flex flex-wrap w-full items-center justify-center text-font-big gap-3 font-bold">
            <span>discover your</span>
            <span className="text-clr-primary">perfect rental</span>
          </div>

          <p className="text-font-20px  text-center capitalize font-regular">
            rent cars, houses and items in just a few clicks
          </p>
        </div>

        <div className="flex flex-col items-center gap-list-gap px-p-25px">
          <div className="flex gap-gap-16px">
            {buttonDetails.map((b) => (
              <Button
                key={b.id}
                text={b.text}
                bgClr={b.bgClr}
                clr={b.clr}
                onFocus={() => setPlaceHolder(b.text)}
                onBlur={() => setPlaceHolder("places rides things")}
              />
            ))}
          </div>
          <div className="w-full px-4 py-3 gap-6 relative rounded-btn-radius justify-between flex items-center bg-clr-white">
            {/* <div className="h-full absolute w-width-1px bg-clr-very-light left-1/2 transform -translate-x-1/2"></div> */}
            <div className=" flex gap-2">
              <Search className="text-clr-light" />
              <input
                type="text"
                placeholder={`Search ${placeHolder}`}
                className=" focus:outline-none font-light text-font-small bg-right-right"
              />
            </div>

            <div className="h-full flex items-center gap-6">
              <div
                onClick={() => setArrowDown(!isArrowDown)}
                className="relative flex cursor-pointer items-center justify-between gap-3"
              >
                <div className="flex items-center gap-2">
                  <div>
                    <Location className="text-clr-light" />
                  </div>
                  <p className="text-nowrap overflow-hidden text-clr-light font-light text-font-small">
                    {location ? location : "Select Location"}
                  </p>
                </div>
                <div>
                  <ArrowDown
                    className={`transition-all duration-250 ease-in text-clr-light ${
                      isArrowDown ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </div>

                <div
                  id="drop-down-menu"
                  ref={dropdownRef}
                  className={`absolute transition-none h-0 overflow-hidden ${
                    isArrowDown ? "h-fit" : "h-0"
                  } ${
                    dropDirection === "up"
                      ? "top-0 -translate-y-full"
                      : "bottom-0 translate-y-full right-20"
                  }  text-clr-white bg-clr-light rounded-xl`}
                >
                  <ul className="p-sign-in-p-2xl">
                    {locations.map((l) => (
                      <li
                        onClick={() => setLocation(l.text)}
                        className="w-full rounded-md p-2 px-p-25px hover:bg-clr-white hover:text-clr-light "
                        key={l.id}
                      >
                        {l.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="rounded-full bg-clr-primary aspect-square flex items-center p-2">
                <Search className="text-clr-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverRental;
