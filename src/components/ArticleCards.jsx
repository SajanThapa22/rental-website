import React from "react";

const ArticleCards = ({ date, title, context, img, styles }) => {
  return (
    <div
      className={`flex flex-col lg:flex-row gap-4 lg:gap-g-20px 2xl:gap-8 ${styles}`}
    >
      <div className={`overflow-hidden`}>
        <img
          className="rounded-lg w-full aspect-[2/1] xl:aspect-[3/2] object-cover"
          src={img}
          alt=""
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
            className="font-bold text-font-regular 2xl:text-f-20px text-clr-very-dark"
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
