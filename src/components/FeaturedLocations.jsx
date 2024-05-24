import React from "react";
import SectionTitle from "./SectionTitle";
import LocationsCard from "./LocationsCard";
import kandy from "../assets/kandy.png";
import anuradhapura from "../assets/anuradhapura.png";
import gampha from "../assets/gampha.png";
import badulla from "../assets/badulla.png";
import colombo from "../assets/colombo.png";
import jaffna from "../assets/jaffna.png";

const FeaturedLocations = () => {
  return (
    <div className="mt-mt-50 md:px-16 lg:px-20 px-p-16px flex flex-col gap-g-24px lg:gap-g-32px">
      <SectionTitle title="featured locations" />

      <div className="w-full lg:aspect-[4/1] grid grid-cols-1 grid-rows-6 md:grid-cols-2 lg:grid-cols-4 gap-g-16px xl:gap-g-22px 2xl:gap-g-32px items-stretch">
        <div className="lg:row-span-2">
          <LocationsCard location="kandy" img={kandy} />
        </div>
        <LocationsCard location="anuradhapura" img={anuradhapura} />
        <LocationsCard location="gampha" img={gampha} />

        <div className="lg:row-span-2">
          <LocationsCard location="colombo" img={colombo} />
        </div>
        <LocationsCard location="badulla" img={badulla} />

        <LocationsCard location="jaffna" img={jaffna} />
      </div>
    </div>
  );
};

export default FeaturedLocations;
