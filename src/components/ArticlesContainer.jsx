import React from "react";
import SectionTitle from "./SectionTitle";
import ArticleCards from "./ArticleCards";

import mainArticle from "../assets/Images/mainArticle.png";
import article1 from "../assets/Images/article1.png";
import article2 from "../assets/Images/article2.png";
import article3 from "../assets/Images/article3.png";
import article4 from "../assets/Images/article4.png";

const articles = [
  {
    img: article1,
    date: "May 7, 2023",
    title: "Car Rental Hacks for a Smooth Journey",
    context:
      "Learn insider tips for getting the best deals and making the most of your rental car experience.",
  },
  {
    img: article4,
    date: "April 25, 2023",
    title: "Managing Your Rental Items: A Comprehensive Guide",
    context:
      "Get valuable insights on how to effectively manage and maintain your rented items.",
  },
  {
    img: article3,
    date: "January 2, 2023",
    title: "Navigating the Rental Market: Insights for New Renters",
    context:
      "Explore key considerations and useful tips for individuals new to the rental market.",
  },
  {
    img: article2,
    date: "April 7, 2023",
    title: "Maximizing Returns: Strategies for Rental Property Owners ",
    context:
      "Learn strategies to optimize the return on investment for your rental property.",
  },
];

const ArticlesContainer = () => {
  return (
    <div className="mt-mt-50 md:px-16 lg:px-20 px-p-16px gap-g-24px flex flex-col md:gap-g-32px lg:gap-g-40px">
      <SectionTitle title="important articles" />
      <div
        id="article-container"
        className="grid grid-cols-1 gap-5 2xl:gap-8 xl:grid-cols-[5fr,4fr] 2xl:grid-cols-[7fr,5fr] "
      >
        <div className="h-full">
          <ArticleCards
            styles="grid grid-cols-1"
            img={mainArticle}
            date="february, 2023"
            title="Top Tips for Finding the Perfect Rental"
            context="Discover expert advice on how to find the ideal rental property that meets your needs and budget."
          />
        </div>
        <div className="flex flex-col gap-4 2xl:gap-6">
          {articles.map((a) => (
            <ArticleCards
              key={a.date}
              img={a.img}
              date={a.date}
              title={a.title}
              context={a.context}
              styles="grid grid-cols-1 md:grid-cols-[3fr,5fr] lg:grid-cols-[2fr,6fr] xl:grid-cols-[3fr,4fr]  "
            />
          ))}
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default ArticlesContainer;
