import React from "react";

const MetricsCard = ({ amount, text }) => {
  return (
    <div className="aspect-[2/1] w-full flex flex-col justify-center bg-clr-very-dark p-p-45px md:p-p-50px lg:p-p-60px 2xl:p-p-80px gap-g-12px items-center rounded-2xl">
      <p className="font-semibold text-f-36px xl:text-f-40px text-clr-white">{`${amount}+`}</p>
      <p className="text-font-small inline-block md:whitespace-nowrap xl:text-font-regular text-clr-white">
        {text}
      </p>
    </div>
  );
};

export default MetricsCard;
