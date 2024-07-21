import React from "react";

const LocationsCard = ({ img, location, styles }) => {
  return (
    <div
      className={`relative aspect-[8/6] lg:aspect-[3/2] h-full w-full rounded-lg overflow-hidden`}
    >
      <img
        className="w-full h-full object-cover hover:scale-110 transition-all duration-[.3s]"
        src={img}
        alt=""
      />
      <p className="absolute leading-none bottom-5 left-5 text-clr-white text-font-regular lg:text-f-20px capitalize">
        {location}
      </p>
    </div>
  );
};

export default LocationsCard;
