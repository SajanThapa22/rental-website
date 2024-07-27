import menu from "../assets/Images/menu.png";
import idakLogo from "../assets/Images/idakLogo.png";
import Button from "./Button";
import NavList from "./NavList";

const NavBarResponsive = ({ onOpen, isVisible, onClose }) => {
  const screenWidth = window.innerWidth;

  return (
    <div
      id="nav-bar"
      className=" flex gap-x-20 justify-between px-6 pt-4 pb-4 items-center text-nowrap text-font-regular font-medium capitalize "
    >
      <div id="idak-logo" className="cursor-pointer">
        <img className=" w-20 md:w-[120px] lg:[w-110px]" src={idakLogo} />
      </div>

      <div
        id="sign-in-post-listing"
        className="flex gap-sign-in-listing-gap items-center"
      >
        <div onClick={onOpen} className="flex items-center cursor-pointer">
          <img src={menu} className="w-6 md:w-8" alt="" />
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
