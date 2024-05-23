import React from "react";
import anneLiza from "../assets/anneLiza.png";
import Heart from "../assets/heart.svg?react";

const Cards = ({ bgImg }) => {
  return (
    <div className="flex flex-col rounded-lg">
      <div id="img-container">
        <img className="object-cover w-full" src={bgImg} alt="" />
      </div>

      <div
        id="details"
        className="flex flex-col gap-g-14px pt-3 border border-gray-bg border-t-0 rounded-lg"
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
          <div>2500 square fit</div>
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
            <Heart className="w-w-24px aspect-square" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
