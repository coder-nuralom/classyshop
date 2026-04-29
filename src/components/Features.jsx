import React from "react";
import FeaturesCard from "./FeaturesCard";
import featuresData from "../../Data/featuresData.js";

const Features = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 max-[450px]:gap-x-4 gap-y-7">
      {featuresData.map((itemData, index) => (
        <FeaturesCard key={index} itemData={itemData} />
      ))}
    </div>
  );
};

export default Features;
