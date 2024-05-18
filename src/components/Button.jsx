import React from "react";

const Button = ({ text }) => {
  return (
    <button
      className={`bg-clr-primary p-sign-in-p-lg 2xl:p-sign-in-p-2xl text-clr-white rounded-btn-radius flex items-center `}
    >
      {text}
    </button>
  );
};

export default Button;
