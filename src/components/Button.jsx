import React from "react";

const Button = ({ text, clr, bgClr, onFocus, onBlur }) => {
  return (
    <button
      onFocus={onFocus}
      onBlur={onBlur}
      className={`${bgClr} p-sign-in-p-lg 2xl:p-sign-in-p-2xl ${clr} rounded-btn-radius flex items-center capitalize`}
    >
      {text}
    </button>
  );
};

export default Button;
