import React, { useState } from "react";
import SideBar from "../components/SideBar";
import Pagination from "../components/Pagination";
import BreadCumbs from "../components/BreadCumbs";
import SectionWrapper from "../components/SectionWrapper";
import ShopHeader from "../components/ShopHeader";
import FilterDwarer from "../components/FilterDwarer";
import products from "../../Data/productsData";
import ProductCard from "../components/ProductCard";
import ProductCardListView from "../components/ProductCardListView";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { resetFilters } from "../../features/productFilterSlice";

const ShopPage = () => {
  const dispatch = useDispatch();
  const [isGrid, setIsGrid] = useState(true);

  const { searchTerm, categoryIds, brands, priceRange, rating } = useSelector(
    (state) => state.productFilter,
  );

  const filteredProducts = products.filter((item) => {
    const matchesCategory =
      !categoryIds || categoryIds.length === 0 || categoryIds.includes(item.categoryId);

    const matchesSearch =
      !searchTerm || item.title.toLowerCase().includes(searchTerm.toLowerCase());

    const brandMatch = !brands || brands.length === 0 || brands.includes(item.brand);

    const matchesPrice =
      !priceRange || (item.price >= priceRange[0] && item.price <= priceRange[1]);

    const matchesRating = !rating || item.rating === rating;

    return matchesCategory && matchesSearch && brandMatch && matchesPrice && matchesRating;
  });

  return (
    <>
      <FilterDwarer />

      <BreadCumbs className="mb-3" />

      <SectionWrapper className="pb-10">
        <div className="lg:flex lg:items-start lg:gap-10">
          <div className="hidden lg:block lg:w-[20%] shrink-0 lg:sticky top-20 overflow-y-auto h-[85vh]">
            <SideBar />
          </div>

          <div className="lg:flex-1">
            <ShopHeader isGrid={isGrid} setIsGrid={setIsGrid} />
            <div
              className={`grid gap-5 max-[450px]:gap-x-3 max-[450px]:gap-y-4 ${isGrid ? "grid-cols-2 md:grid-cols-3 xl:grid-cols-4" : "grid-cols-1"}`}
            >
              {filteredProducts.length > 0 ? (
                filteredProducts.map((item, index) =>
                  isGrid ? (
                    <ProductCard product={item} key={index} />
                  ) : (
                    <ProductCardListView product={item} key={index} />
                  ),
                )
              ) : (
                <div className="col-span-full flex flex-col items-center justify-center py-16 text-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
                    alt="No products"
                    className="w-24 h-24 mb-4 opacity-70"
                  />

                  <h2 className="text-xl font-semibold mb-2">No Products Found</h2>

                  <p className="text-gray-500 mb-4 max-w-sm">
                    Sorry, we couldn’t find any products for this category. Try changing
                    filters or explore other categories.
                  </p>

                  <button
                    onClick={() => dispatch(resetFilters())}
                    className="px-5 py-2 bg-[var(--bg-orange)] text-white rounded-md hover:bg-gray-800 transition cursor-pointer"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
            <Pagination />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default ShopPage;
