import React from "react";
import idakLogo from "../assets/Images/idakLogo.png";

import Insta from "../assets/SVGs/insta.svg?react";
import Twitter from "../assets/SVGs/twitter.svg?react";
import Youtube from "../assets/SVGs/youtube.svg?react";
import Facebook from "../assets/SVGs/facebook.svg?react";
import Linkedin from "../assets/SVGs/linkedin.svg?react";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row lg:gap-12 xl:gap-20 2xl:gap-40 gap-7 mt-mt-50 md:px-16 lg:px-20 px-p-16px py-8 bg-footer-bg">
        <div className="flex flex-col gap-g-18px lg:flex-2">
          <div>
            <img className="w-w-153px h-h-49px" src={idakLogo} alt="" />
          </div>
          <div>
            <p className="text-clr-very-dark text-font-small">
              Nepal's first & largest platform designed to create an online
              marketplace exclusively for RENT
            </p>
          </div>
          <div className="flex items-center gap-3 mt-3">
            <div className="w-6 aspect-square rounded-full bg-clr-primary flex items-center justify-center">
              <Insta />
            </div>
            <div className="w-6 aspect-square rounded-full bg-clr-primary flex items-center justify-center">
              <Twitter />
            </div>
            <div className="w-6 aspect-square rounded-full bg-clr-primary flex items-center justify-center">
              <Youtube />
            </div>
            <div className="w-6 aspect-square rounded-full bg-clr-primary flex items-center justify-center">
              <Facebook />
            </div>
            <div className="w-6 aspect-square rounded-full bg-clr-primary flex items-center justify-center">
              <Linkedin />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-10 lg:gap-12 2xl:gap-40 md:flex-row text-nowrap">
          <div className="flex flex-col gap-5">
            <p className="text-f-16px text-clr-primary font-bold capitalize">
              navigation
            </p>
            <p className="text-font-small text-clr-very-dark capitalize">
              about
            </p>
            <p className="text-font-small text-clr-very-dark capitalize">
              blog
            </p>
            <p className="text-font-small text-clr-very-dark">Terms of Use</p>
            <p className="text-font-small text-clr-very-dark capitalize">
              privacy policy
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-f-16px text-clr-primary font-bold capitalize">
              featured locations
            </p>
            <p className="text-font-small text-clr-very-dark capitalize">
              kandy
            </p>
            <p className="text-font-small text-clr-very-dark capitalize">
              anuradhapura
            </p>
            <p className="text-font-small text-clr-very-dark capitalize">
              badulla
            </p>
            <p className="text-font-small text-clr-very-dark capitalize">
              colombo
            </p>
            <p className="text-font-small text-clr-very-dark capitalize">
              kaluthara
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-f-16px text-clr-primary font-bold capitalize">
              help
            </p>
            <p className="text-font-small text-clr-very-dark">FAQ</p>
            <p className="text-font-small text-clr-very-dark capitalize">
              contact us
            </p>
          </div>
        </div>

        <div className="lg:w-72">
          <div className=" flex flex-col gap-y-5">
            <p className="text-nowrap text-f-16px text-clr-primary font-bold">
              Subscribe to Our Newsletter
            </p>
            <p className="text-font-small text-clr-very-dark capitalize">
              Stay updated with the latest listings and rental tips.
            </p>
          </div>

          <div className="flex items-center px-5 mt-6 mb-10 lg:mb-4 w-full h-12 rounded-full border border-input-border max-w-md">
            <input
              className="focus:outline-none bg-transparent text-font-very-small w-full"
              placeholder="Email Address"
              type="text"
            />
          </div>

          <div className="flex items-center px-5 justify-center w-full h-12 rounded-full bg-clr-primary text-font-small text-clr-white capitalize max-w-md">
            subscribe
          </div>
        </div>
      </div>
      <div className="h-16 flex items-center justify-center text-center text-font-very-small text-clr-copyrights px-16">
        © Copyright 2024. Designed and Developed by SajanT
      </div>
    </>
  );
};

export default Footer;
