import React from "react";
import Cards from "./Cards";

const CardsContainer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <Cards />
    </div>
  );
};

export default CardsContainer;
