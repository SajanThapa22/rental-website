import React from "react";

const MetricsCard = ({ amount, text }) => {
  return (
    <div className=" flex flex-col bg-clr-very-dark p-p-45px md:p-p-50px lg:p-p-60px 2xl:p-p-80px gap-g-12px justify-between items-center rounded-2xl">
      <p className="font-semibold leading-none text-f-36px xl:text-f-40px text-clr-white">{`${amount}+`}</p>
      <p className="text-font-small leading-none inline-block md:whitespace-nowrap xl:text-font-regular text-clr-white">
        {text}
      </p>
    </div>
  );
};

export default MetricsCard;
