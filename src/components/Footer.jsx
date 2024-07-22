import Button from "./Button";

import idakLogo from "../assets/Images/idakLogo.png";
import Insta from "../assets/SVGs/insta.svg?react";
import Twitter from "../assets/SVGs/twitter.svg?react";
import Youtube from "../assets/SVGs/youtube.svg?react";
import Facebook from "../assets/SVGs/facebook.svg?react";
import Linkedin from "../assets/SVGs/linkedin.svg?react";

const list = [
  { id: 1, icon: Insta, link: "https://www.instagram.com/" },
  { id: 2, icon: Twitter, link: "https://www.twitter.com/" },
  { id: 3, icon: Youtube, link: "https://www.youtube.com/" },
  { id: 4, icon: Facebook, link: "https://www.facebook.com/" },
  { id: 5, icon: Linkedin, link: "https://www.linkedin.com/" },
];

const Footer = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row lg:gap-12 xl:gap-20 2xl:gap-36 gap-7 mt-mt-50 md:px-16 lg:px-20 px-p-16px py-8 bg-footer-bg">
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
          <div className="flex items-center gap-[8px] mt-3">
            {list.map((l) => {
              const Icon = l.icon;
              return (
                <div
                  key={l.id}
                  className="size-[26px] rounded-full bg-clr-primary hover:bg-[#dc2626] flex items-center justify-center hover:-translate-y-[3px] transition-transform cursor-pointer"
                >
                  <a href={l.link} target="_blank">
                    <Icon className="text-white" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-10 lg:gap-12 2xl:gap-36 md:flex-row text-nowrap">
          <div className="flex flex-col gap-5">
            <p className="text-f-16px text-clr-primary font-bold capitalize">
              navigation
            </p>
            <p className="text-font-small text-clr-very-dark capitalize cursor-pointer">
              about
            </p>
            <p className="text-font-small text-clr-very-dark capitalize cursor-pointer">
              blog
            </p>
            <p className="text-font-small text-clr-very-dark cursor-pointer">
              Terms of Use
            </p>
            <p className="text-font-small text-clr-very-dark capitalize cursor-pointer">
              privacy policy
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-f-16px text-clr-primary font-bold capitalize">
              featured locations
            </p>
            <p className="text-font-small text-clr-very-dark capitalize">
              kathmandu
            </p>
            <p className="text-font-small text-clr-very-dark capitalize">
              pokhara
            </p>
            <p className="text-font-small text-clr-very-dark capitalize">
              beni
            </p>
            <p className="text-font-small text-clr-very-dark capitalize">
              butwal
            </p>
            <p className="text-font-small text-clr-very-dark capitalize">
              chitwan
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
              Stay updated with the latest listings and rental tips and tricks.
            </p>
          </div>

          <div className="flex items-center px-5 mt-6 mb-10 lg:mb-4 w-full h-12 rounded-full border border-input-border max-w-md">
            <input
              className="focus:outline-none bg-transparent text-font-very-small w-full"
              placeholder="Email Address"
              type="text"
            />
          </div>

          <Button
            clr="text-white"
            bgClr="bg-clr-primary"
            text="subscribe"
            width="w-full p-[10px] max-w-md"
          />
        </div>
      </div>
      <div className="h-16 flex items-center justify-center text-center text-font-very-small text-clr-copyrights px-16 2xl:text-[18px]">
        © Copyright 2024. Designed and Developed by Sajan Thapa
      </div>
    </>
  );
};

export default Footer;
