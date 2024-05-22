import React from "react";

const Decorators = ({ soWidth, boWidth, height }) => {
  return (
    <div className="flex gap-1">
      <div className={`rounded-full bg-clr-primary ${boWidth} ${height}`}></div>
      <div className={`rounded-full bg-clr-primary ${soWidth} ${height}`}></div>
    </div>
  );
};

export default Decorators;
