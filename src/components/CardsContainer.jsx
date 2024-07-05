import React from "react";
import Cards from "./Cards";
import building from "../assets/Images/building.png";
import building1 from "../assets/Images/building1.png";
import building2 from "../assets/Images/building2.png";

const cardDetails = [
  { id: 1, img: building },
  { id: 2, img: building1 },
  { id: 3, img: building2 },
  { id: 4, img: building },
  { id: 5, img: building1 },
  { id: 6, img: building2 },
];

const CardsContainer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
      {cardDetails.map((c) => (
        <Cards key={c.id} bgImg={c.img} />
      ))}
    </div>
  );
};

export default CardsContainer;
