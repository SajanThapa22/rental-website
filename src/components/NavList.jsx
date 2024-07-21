import React, { useState } from "react";
import cross from "../assets/Images/cross.png";

import { GoHome } from "react-icons/go";
import { MdOutlineCategory } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { FaRegQuestionCircle, FaUser } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { MdCarRental } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const list = [
  { id: 1, name: "home", icon: GoHome },
  { id: 7, name: "rentals", icon: MdCarRental },
  { id: 2, name: "categories", icon: MdOutlineCategory },
  { id: 3, name: "about us", icon: FaRegQuestionCircle },
  { id: 4, name: "contact", icon: BsTelephone },
  { id: 5, name: "blog", icon: FaEdit },
  { id: 6, name: "Sign in", icon: FiUser },
];

const NavList = ({ isVisible, onClose }) => {
  return (
    <>
      <div
        onClick={onClose}
        className={`z-[10] fixed left-0 top-0 bg-transparent w-screen h-dvh ${
          isVisible ? "visible" : "hidden"
        } `}
      ></div>
      <div
        className={`fixed z-50 overflow-hidden left-0 top-0 ${
          isVisible ? "w-2/3" : "w-0"
        }
      } h-dvh text-clr-white bg-clr-primary text-font-regular transition-all duration-300 ease-in-out`}
      >
        <ul className="w-full flex px-9 py-[54px] flex-col gap-7">
          {list.map((l) => {
            const Icon = l.icon;
            return (
              <li
                key={l.id}
                className="flex items-center gap-4 md:gap-7 cursor-pointer"
              >
                {<Icon className="size-6 md:size-9 text-white" />}
                <p className="text-[16px] md:text-[22px]">{l.name}</p>
              </li>
            );
          })}
        </ul>
        <div
          onClick={() => {
            onClose();
          }}
          className="absolute top-5 right-5 cursor-pointer"
        >
          <img className="w-8 md:w-12 aspect-square" src={cross} />
        </div>
      </div>
    </>
  );
};

export default NavList;
