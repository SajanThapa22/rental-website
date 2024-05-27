import { useEffect, useState, useRef } from "react";

import Location from "../assets/SVGs/location.svg?react";
import ArrowDown from "../assets/SVGs/arrowdown.svg?react";

export const locations = [
  { id: 1, text: "Pokhara" },
  { id: 2, text: "Kathmandu" },
  { id: 3, text: "Narayanghad" },
  { id: 4, text: "Baglung" },
  { id: 5, text: "Dhading" },
];

const DropdownMenu = () => {
  const [location, setLocation] = useState("");
  const [isArrowDown, setArrowDown] = useState(false);
  const [dropDirection, setDropDirection] = useState("");
  const dropdownRef = useRef();

  const handleToggle = () => {
    setArrowDown(!isArrowDown);
    if (dropdownRef.current) {
      const rect = dropdownRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      const spaceAbove = rect.top;
      if (spaceBelow > 10 && spaceBelow > spaceAbove) {
        setDropDirection("down");
      }
      if (spaceBelow < 10 && spaceBelow < spaceAbove) {
        setDropDirection("up");
      }
    }
  };

  return (
    <div
      onClick={handleToggle}
      className="relative flex cursor-pointer w-full items-center justify-between gap-3"
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
          dropDirection === "down"
            ? "-bottom-1 translate-y-full"
            : "-top-1 -translate-y-full"
        } left-1/2 -translate-x-1/2 text-clr-very-dark bg-clr-very-light rounded-xl`}
      >
        <ul>
          {locations.map((l) => (
            <li
              onClick={() => setLocation(l.text)}
              className="w-full py-2 px-p-25px hover:bg-clr-white hover:text-clr-light "
              key={l.id}
            >
              {l.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropdownMenu;
