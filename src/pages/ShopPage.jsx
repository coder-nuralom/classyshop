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

const ShopPage = () => {
  const location = useLocation();
  const [isGrid, setIsGrid] = useState(true);

  const { categoryIds } = location.state || {};

  const filteredProducts = products.filter((item) => {
    const matchesCategroy = !categoryIds || categoryIds.includes(item.categoryId);

    return matchesCategroy;
  });

  return (
    <>
      <FilterDwarer />

      <BreadCumbs className="mb-3" />

      <SectionWrapper className="pb-10">
        <div className="lg:flex lg:items-start lg:gap-10">
          <div className="hidden lg:block lg:w-[20%] shrink-0 lg:sticky top-20">
            <SideBar />
          </div>

          <div className="lg:flex-1">
            <ShopHeader isGrid={isGrid} setIsGrid={setIsGrid} />
            <div
              className={`grid gap-5 max-[450px]:gap-x-3 max-[450px]:gap-y-4 ${isGrid ? "grid-cols-2 md:grid-cols-3 xl:grid-cols-4" : "grid-cols-1"}`}
            >
              {filteredProducts.map((item, index) =>
                isGrid ? (
                  <ProductCard product={item} key={index} />
                ) : (
                  <ProductCardListView product={item} key={index} />
                ),
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
