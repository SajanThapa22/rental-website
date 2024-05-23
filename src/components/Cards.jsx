import React from "react";
import building from "../assets/building.png";
import anneLiza from "../assets/anneLiza.png";
import Heart from "../assets/heart.svg?react";

const Cards = () => {
  return (
    <div className="grid grid-rows-2 mt-6">
      <div>
        <img src={building} alt="" />
      </div>

      <div id="details" className="p-3">
        <div>
          <div className="flex gap-2 px-p-12px items-center">
            <p className="text-font-regular text-clr-primary font-medium">
              85,000 LKR
            </p>
            <p className="text-font-very-small font-medium">/Month</p>
          </div>
          <div className="px-p-12px">
            <p className="text-f-20px text-clr-very-dark font-semibold ">
              luxury villa in Rego Park
            </p>
          </div>
        </div>

        <div className="flex justify-between text-clr-very-dark text-font-very-small px-p-12px">
          <div>3 bedrooms</div>
          <div>2 bathrooms</div>
          <div>2500 square fit</div>
        </div>

        <div
          id="property-seller"
          className="px-p-12px flex items-center justify-between"
        >
          <div className="flex gap-2 items-center">
            <div className="w-w-48px aspect-square">
              <img className="rounded-full" src={anneLiza} alt="" />
            </div>
            <div>
              <p
                id="name"
                className="text-font-small font-semibold text-clr-very-dark"
              >
                Anne Liza
              </p>
              <p id="work" className="text-font-very-small text-clr-light">
                Property Seller
              </p>
            </div>
          </div>
          <div
            id="like-div"
            className="w-w-44px flex justify-center items-center"
          >
            <Heart className="w-w-24px aspect-square" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
