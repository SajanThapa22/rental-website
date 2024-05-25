import React, { useState } from "react";
import anneLiza from "../assets/Images/anneLiza.png";
import Heart from "../assets/SVGs/heart.svg?react";

const Cards = ({ bgImg }) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="flex flex-col rounded-lg">
      <div id="img-container" className="relative">
        <img className="object-cover w-full" src={bgImg} alt="" />
        <div className="absolute flex w-fit top-4 right-4 xl:top-4 xl:right-4 items-center justify-center bg-clr-light-green text-clr-white px-p-16px py-p-4px 2xl:px-p-26px 2xl:py-p-7px capitalize text-font-very-small lg:text-font-small rounded-full">
          for rent
        </div>
      </div>

      <div
        id="details"
        className="flex flex-col gap-g-14px pt-3 border border-gray-bg border-t-0 rounded-t-none rounded-lg"
      >
        <div className="flex flex-col gap-1">
          <div className="flex gap-2 px-p-12px items-center">
            <p className="text-font-regular xl:text-f-20px text-clr-primary font-medium">
              85,000 LKR
            </p>
            <p className="text-font-very-small xl:text-f-16px font-medium">
              /Month
            </p>
          </div>
          <div className="px-p-12px">
            <p className="text-f-20px xl:text-f-24px text-clr-very-dark font-semibold ">
              luxury villa in Rego Park
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center text-clr-very-dark text-font-very-small xl:text-f-16px px-p-12px">
          <div>3 bedrooms</div>
          <div className="h-5 w-w-2px bg-clr-very-dark"></div>
          <div>2 bathrooms</div>
          <div className="h-5 w-w-2px bg-clr-very-dark"></div>
          <div>2500 Square FT</div>
        </div>
        {/* 
        <div className="h-h-1px w-full bg-gray-bg"></div> */}

        <div
          id="property-seller"
          className="py-p-16px px-p-12px flex items-center justify-between  border-t border-t-gray-bg"
        >
          <div className="flex gap-g-16px items-center">
            <div className="w-w-48px aspect-square">
              <img className="rounded-full" src={anneLiza} alt="" />
            </div>
            <div className="flex gap-1 flex-col justify-between">
              <p
                id="name"
                className="text-font-small xl:text-f-20px font-semibold text-clr-very-dark"
              >
                Anne Liza
              </p>
              <p
                id="work"
                className="text-font-very-small xl:text-font-small text-clr-light"
              >
                Property Seller
              </p>
            </div>
          </div>
          <div
            id="like-div"
            className="w-w-44px aspect-square bg-clr-very-light flex justify-center items-center"
          >
            <Heart
              onClick={() => setIsClicked(!isClicked)}
              className={`w-w-24px text-clr-light ${
                isClicked
                  ? "fill-clr-primary text-clr-primary"
                  : "fill-none text-clr-light"
              } aspect-square `}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
