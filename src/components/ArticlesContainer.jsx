import React from "react";
import SectionTitle from "./SectionTitle";
import ArticleCards from "./ArticleCards";
import jaffna from "../assets/jaffna.png";

const ArticlesContainer = () => {
  return (
    <div className="mt-mt-50 md:px-16 lg:px-20 px-p-16px">
      <SectionTitle title="important articles" />
      <div id="article-container" className="grid grid-cols-2">
        <div>
          <ArticleCards
            img={jaffna}
            date="february"
            title="Top Tips for Finding the Perfect Rental"
            context="Discover expert advice on how to find the ideal rental property that meets your needs and budget."
          />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ArticlesContainer;
