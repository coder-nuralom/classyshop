import React from "react";
import PromoCard from "./PromoCard";
import SectionWrapper from "./SectionWrapper";

const PromoSection = ({ data }) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6">
      {data.map((item, index) => (
        <PromoCard
          key={index}
          image={item.image}
          subtitle={item.subtitle}
          title={item.title}
          button={item.button}
        />
      ))}
    </div>
  );
};

export default PromoSection;
