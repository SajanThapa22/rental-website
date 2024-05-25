import React from "react";

const Button = ({ text, clr, bgClr, onFocus, onBlur, width }) => {
  return (
    <button
      onFocus={onFocus}
      onBlur={onBlur}
      className={`${bgClr} ${width} flex justify-center items-center py-p-12px px-p-24px ${clr} rounded-full text-font-very-small lg:text-font-small 2xl:text-font-regular capitalize`}
    >
      {text}
    </button>
  );
};

export default Button;
