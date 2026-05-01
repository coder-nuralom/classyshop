import React, { useState } from "react";
import SideBar from "../components/SideBar";
import Pagination from "../components/Pagination";
import BreadCumbs from "../components/BreadCumbs";
import SectionWrapper from "../components/SectionWrapper";
import ShopHeader from "../components/ShopHeader";
import ShopProductContainer from "../components/ShopProductContainer";
import FilterDwarer from "../components/FilterDwarer";

const ShopPage = () => {
  const [isGrid, setIsGrid] = useState(true);
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
            <ShopProductContainer isGrid={isGrid} />
            <Pagination />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default ShopPage;
