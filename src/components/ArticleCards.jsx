import React from "react";

const ArticleCards = ({ date, title, context, img, height }) => {
  return (
    <div className="gap-g-16px lg:gap-g-22px 2xl:gap-g-32px">
      <div className={`${height}`}>
        <img className="h-full w-full" src={img} alt="" />
      </div>

      <div className="gap-3 lg:gap-5 2xl:gap-8">
        <div className="gap-2 lg:gap-5 2xl:gap-8">
          <p id="date" className="font-bold text-font-small text-clr-primary">
            {date}
          </p>
          <p
            id="title"
            className="font-bold text-font-regular xl:text-f-20px text-clr-very-dark"
          >
            {title}
          </p>
        </div>
        <p
          id="context"
          className="text-font-small xl:text-font-regular text-grayer"
        >
          {context}
        </p>
      </div>
    </div>
  );
};

export default ArticleCards;
