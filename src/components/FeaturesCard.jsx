import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";

const FeaturesCard = ({ itemData }) => {
  const Icon = itemData.icon;
  return (
    <div className="text-center py-5 px-2 bg-white shadow-sm rounded-md border border-black/10">
      <Icon className="text-5xl inline text-black/90 fill-black/90 mb-3" />
      <h4 className="capitalize text-base max-[400px]:text-sm font-semibold">
        {itemData.title}
      </h4>
      <p className="text-sm max-[400px]:text-xs text-[var(--text-gray)] font-medium mt-1">
        {itemData.subTitle}
      </p>
    </div>
  );
};

export default FeaturesCard;
