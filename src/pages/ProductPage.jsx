import React from "react";
import { useParams } from "react-router-dom";
import SectionWrapper from "../components/SectionWrapper";
import ProductCard from "../components/ProductCard";

const ProductPage = () => {
  const { pageName } = useParams();
  const validPageName = pageName.split("-").join(" ");
  return (
    <>
      <SectionWrapper>
        <div className="bg-gray-100 py-4 md:py-5 rounded-md">
          <h1 className="text-2xl sm:text-[30px] md:text-[40px] text-center capitalize text-black/80 font-medium">
            {validPageName}
          </h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 min-[575px]:gap-5 mt-5 mb-10">
          {[...Array(20)].map((_, index) => (
            <ProductCard key={index} />
          ))}
        </div>
      </SectionWrapper>
    </>
  );
};

export default ProductPage;
