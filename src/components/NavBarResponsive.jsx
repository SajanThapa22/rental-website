import menu from "../assets/Images/menu.png";
import idakLogo from "../assets/Images/idakLogo.png";
import Button from "./Button";
import { useEffect, useState } from "react";
import NavList from "./NavList";

const list = [
  { id: 1, name: "home" },
  { id: 2, name: "rentals" },
  { id: 3, name: "categories" },
  { id: 4, name: "about us" },
  { id: 5, name: "contact" },
  { id: 7, name: "blog" },
];

const NavBarResponsive = ({ onOpen, isVisible, onClose }) => {
  const screenWidth = window.innerWidth;

  return (
    <div
      id="nav-bar"
      className=" flex gap-x-20 justify-between px-6 pt-4 pb-4 items-center text-nowrap text-font-regular font-medium capitalize "
    >
      <div id="idak-logo ">
        <img className=" w-20 " src={idakLogo} alt="" />
      </div>

      <div
        id="sign-in-post-listing"
        className="flex gap-sign-in-listing-gap items-center"
      >
        <div onClick={onOpen} className="flex items-center cursor-pointer">
          <img src={menu} className="w-6" alt="" />
        </div>

        <div id="post-listing">
          <Button
            pad="sign-in-p-lg"
            text="+ postlisting"
            bgClr="bg-clr-primary"
            clr="text-clr-white"
          />
        </div>
      </div>
      <NavList onClose={onClose} isVisible={isVisible} />

      {/* <div className="absolute left-0 top-0 w-2/3 h-dvh bg-clr-primary"></div> */}
    </div>
  );
};

export default NavBarResponsive;
