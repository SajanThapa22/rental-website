import React, { useState } from "react";
import { list } from "./NavBar";
import cross from "../assets/Images/cross.png";

const NavList = ({ isVisible, onClose }) => {
  return (
    <div
      className={`absolute z-20 overflow-hidden left-0 top-0 ${
        isVisible ? "w-2/3" : "w-0"
      }
      } h-dvh text-clr-white bg-clr-primary text-font-regular transition-all duration-300 ease-in-out`}
    >
      <ul className="w-full flex p-9 flex-col gap-7">
        {list.map((l) => (
          <li key={l.id}>{l.name}</li>
        ))}
      </ul>
      <div onClick={onClose} className="absolute top-5 right-5 cursor-pointer">
        <img className="w-8 aspect-square" src={cross} />
      </div>
    </div>
  );
};

export default NavList;
