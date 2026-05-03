import React, { useMemo } from "react";
import ProductCard from "../components/ProductCard";
import { useNavigate, useParams } from "react-router-dom";
import SectionWrapper from "../components/SectionWrapper";
import products from "../../Data/productsData";
import categories from "../../Data/categoryData";

const CategroyProducts = () => {
  const navigate = useNavigate();

  const getLeafCategrories = (categories) => {
    let result = [];

    const traverse = (items) => {
      items.forEach((item) => {
        if (item.children && item.children.length > 0) {
          traverse(item.children);
        } else {
          result.push(item);
        }
      });
    };
    traverse(categories);
    return result;
  };

  const leaftCategories = getLeafCategrories(categories);

  const { categoryName } = useParams();
  const selectedCategory = leaftCategories.find((cat) => cat.slug === categoryName);

  const validCategoryName = selectedCategory
    ? selectedCategory.name
    : categoryName.split("-").join(" ");

  const filteredProducts = products.filter((item) => item.categoryId === selectedCategory?.id);
  return (
    <>
      <div className="bg-gray-100 py-4 md:py-5 rounded-md">
        <h1 className="text-2xl sm:text-[30px] text-center capitalize text-black/80 font-medium">
          {validCategoryName}
        </h1>
      </div>
      <SectionWrapper>
        {filteredProducts?.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 min-[575px]:gap-5 mt-5 mb-10">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
            <div className=" w-17 h-17 sm:w-20 sm:h-20 rounded-full bg-gray-100 flex items-center justify-center mb-4">
              <svg
                className="w-10 h-10 text-gray-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h18M3 3v18h18V3M7 7h10M7 11h6"
                />
              </svg>
            </div>

            <h2 className="text-xl md:text-2xl font-semibold text-gray-700">
              No Products Found
            </h2>

            <p className="text-gray-500 mt-2 max-w-md">
              We couldn’t find any products in this category. Try exploring other categories or
              check back later.
            </p>

            <button
              onClick={() => {
                if (window.history.length > 1) {
                  navigate(-1);
                } else {
                  navigate("/");
                }
              }}
              className="mt-6 px-5 py-2 bg-[var(--bg-orange)] text-white rounded-md hover:bg-black transition duration-300 cursor-pointer"
            >
              Go Back
            </button>
          </div>
        )}
      </SectionWrapper>
    </>
  );
};

export default CategroyProducts;
