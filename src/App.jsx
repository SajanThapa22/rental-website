import React, { useState } from "react";
import NavBar from "./components/NavBar";
import NavBarResponsive from "./components/NavBarResponsive";
import DiscoverRental from "./components/DiscoverRental";
import BrowseCategories from "./components/BrowseCategories";
import FeaturedListings from "./components/FeaturedListings";
import CardsContainer from "./components/CardsContainer";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  const [width, setWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => setWidth(window.innerWidth));

  const makeInvisible = () => setIsVisible(false);
  const makeVisible = () => setIsVisible(true);

  return (
    <>
      {width > 1140 ? (
        <NavBar />
      ) : (
        <NavBarResponsive
          isVisible={isVisible}
          onClose={makeInvisible}
          onOpen={makeVisible}
        />
      )}
      <DiscoverRental />
      <BrowseCategories />
      <FeaturedListings />
      <div className="h-96"></div>
    </>
  );
};

export default App;
