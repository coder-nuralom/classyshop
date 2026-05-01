import React from "react";
import { useParams } from "react-router-dom";
import SectionWrapper from "../components/SectionWrapper";
import ProductCard from "../components/ProductCard";
import products from "../../Data/productsData";

const ProductPage = () => {
  const { pageName } = useParams();
  const validPageName = pageName.split("-").join(" ");

  console.log(pageName);

  const getFilteredProducts = () => {
    if (pageName === "new-arrivals") {
      return products.filter((item) => item.isNew);
    } else if (pageName === "hot-deals") {
      return products.filter((item) => item.isHotDeal);
    } else if (pageName === "feature-product") {
      return products.filter((item) => item.isFeatured);
    } else if (pageName === "best-sellers") {
      return products.filter((item) => item.isBestSelling);
    } else if (pageName === "flash-sale") {
      return products.filter((item) => item.dealEnd);
    } else {
      return products;
    }
  };

  const filteredProducts = getFilteredProducts();
  return (
    <>
      <div className="bg-gray-100 py-4 md:py-5 rounded-md">
        <h1 className="text-2xl sm:text-[30px] text-center capitalize text-black/80 font-medium">
          {validPageName}
        </h1>
      </div>
      <SectionWrapper>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 min-[575px]:gap-5 mt-5 mb-10">
          {filteredProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </SectionWrapper>
    </>
  );
};

export default ProductPage;
