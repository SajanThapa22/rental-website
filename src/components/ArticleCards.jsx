import React from "react";

const ArticleCards = ({ date, title, context, img, styles }) => {
  return (
    <div
      className={`flex flex-col lg:flex-row gap-4 lg:gap-g-20px 2xl:gap-8 hover:bg-[#e6e6e6] p-2 rounded-md ${styles}`}
    >
      <div className="overflow-hidden rounded-[8px]">
        <img
          className=" w-full aspect-[2/1] rounded-lg xl:aspect-[3/2] object-covertransition-transform duration-[.3s]"
          src={img}
        />
      </div>

      <div className=" flex flex-col gap-2  2xl:gap-4">
        <div className="flex flex-col gap-2 2xl:gap-4">
          <p
            id="date"
            className="font-bold text-font-small text-clr-primary capitalize"
          >
            {date}
          </p>
          <p
            id="title"
            className="font-bold text-font-regular 2xl:text-f-20px text-clr-very-dark cursor-pointer"
          >
            {title}
          </p>
        </div>
        <p
          id="context"
          className="text-font-small 2xl:text-font-regular text-grayer"
        >
          {context}
        </p>
      </div>
    </div>
  );
};

export default ArticleCards;
