import React from "react";
import MetricsCard from "./MetricsCard";

const Metrics = () => {
  return (
    <div className="py-p-24px px-p-16px md:px-16 lg:px-20 mt-mt-50 grid grid-rows-[auto,1fr,1fr,1fr] md:grid-cols-3 md:grid-rows-1 lg:grid-cols-4 gap-6 items-center justify-center">
      <div className="flex items-center justify-center">
        <p className="font-bold text-center md:text-left text-f-24px md:text-font-medium lg:text-f-32px 2xl:text-f-50px text-clr-very-dark">
          Insights and Performance Metrics
        </p>
      </div>
      <MetricsCard amount="5000" text="Total Listings in the System" />
      <MetricsCard amount="1000" text="Active Listings" />
      <MetricsCard amount="300" text="Articles in the Blog" />
    </div>
  );
};

export default Metrics;
