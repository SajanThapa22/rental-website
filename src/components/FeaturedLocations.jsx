import React from "react";
import SectionTitle from "./SectionTitle";
import LocationsCard from "./LocationsCard";
import ktm from "../assets/Images/ktm.jpg";
import pokhara from "../assets/Images/pokhara.jpg";
import beni from "../assets/Images/beni.jpg";
import butwal from "../assets/Images/butwal.jpg";
import jomsom from "../assets/Images/jomsom.jpg";
import baglung from "../assets/Images/baglung.jpeg";

const FeaturedLocations = () => {
  return (
    <div className="mt-mt-50 md:px-16 lg:px-20 px-p-16px flex flex-col gap-g-24px lg:gap-g-32px">
      <SectionTitle title="featured locations" />

      <div className="w-full lg:aspect-[4/1] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-g-16px xl:gap-g-22px 2xl:gap-g-32px items-stretch">
        <div className="lg:row-span-2">
          <LocationsCard location="Kathmandu" img={ktm} />
        </div>
        <LocationsCard location="Beni" img={beni} />
        <LocationsCard location="jomsom" img={jomsom} />

        <div className="lg:row-span-2">
          <LocationsCard location="pokhara" img={pokhara} />
        </div>
        <LocationsCard location="butwal" img={butwal} />

        <LocationsCard location="baglung" img={baglung} />
      </div>
    </div>
  );
};

export default FeaturedLocations;
