import React from "react";
import ProductCard from "../components/ProductCard";
import { useParams } from "react-router-dom";
import SectionWrapper from "../components/SectionWrapper";
import products from "../../Data/productsData";
import homeCategories from "../../Data/homeCategroyData";

const CategroyProducts = () => {
  const { categoryName } = useParams();

  const selectedCategory = homeCategories.find((cat) => cat.slug === categoryName);

  const validCategoryName = selectedCategory
    ? selectedCategory.name
    : categoryName.split("-").join(" ");

  const filteredProducts = products.filter(
    (item) => item.category.toLowerCase() === selectedCategory.name.toLowerCase(),
  );
  return (
    <SectionWrapper>
      <div className="bg-gray-100 py-4 md:py-5 rounded-md">
        <h1 className="text-2xl sm:text-[30px] md:text-[40px] text-center capitalize text-black/80 font-medium">
          {validCategoryName}
        </h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 min-[575px]:gap-5 mt-5 mb-10">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default CategroyProducts;
