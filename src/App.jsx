import React, { useState } from "react";
import NavBar from "./components/NavBar";
import NavBarResponsive from "./components/NavBarResponsive";

const App = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isVisible, setIsVisible] = useState(false);

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
    </>
  );
};

export default App;
