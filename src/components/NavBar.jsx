import React from "react";

import idakLogo from "../assets/Images/idakLogo.png";
import user from "../assets/Images/user.png";
import Button from "./Button";

export const list = [
  { id: 1, name: "home" },
  { id: 2, name: "rentals" },
  { id: 3, name: "categories" },
  { id: 4, name: "about us" },
  { id: 5, name: "contact" },
  { id: 6, name: "blog" },
];

const NavBar = () => {
  const screenWidth = window.innerWidth;
  return (
    <div
      id="nav-bar"
      className=" flex justify-between p-nav-p-lg 2xl:p-nav-p-2xl items-center text-nowrap text-font-regular font-medium capitalize relative"
    >
      <div id="idak-logo ">
        <img className="w-100% min-w-32 lg:w-32 w-32" src={idakLogo} alt="" />
      </div>

      <nav className="flex text-nowrap align-middle absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <ul className="list-none flex gap-list-gap">
          {list.map((l) => (
            <li className="flex items-center" key={l.id}>
              {l.name}
            </li>
          ))}
        </ul>
      </nav>

      <div
        id="sign-in-post-listing"
        className="flex gap-sign-in-listing-gap items-center"
      >
        <div
          id="sign-in"
          className="flex items-center gap-sign-in-gap p-sign-in-p-lg 2xl:p-sign-in-p-2xl"
        >
          <img src={user} alt="" />
          <p id="sign-in-text" className="text-clr-primary">
            sign in
          </p>
        </div>

        <div id="post-listing">
          <Button
            text="+ post listing"
            bgClr="bg-clr-primary"
            clr="text-clr-white"
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
