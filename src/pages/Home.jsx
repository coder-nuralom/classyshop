import React from "react";
import HomeSlider from "../components/HomeSlider";
import Categories from "../components/Categories";
import FreeShipping from "../components/FreeShipping";
import SubBanner from "../components/SubBanner";
import PopularProducts from "../components/PopularProducts";
import OfferBanner from "../components/OfferBanner";
import PromoSection from "../components/PromoSection";
import Features from "../components/Features";
import ProductsSlider from "../components/ProductsSlider";
import SectionWrapper from "../components/SectionWrapper";
import { promoData1 } from "../../Data/promotionalData";
import { promoData2 } from "../../Data/promotionalData";
const Home = () => {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <SectionWrapper className="bg-[var(--bg-gray)] py-7.5">
        <HomeSlider />
      </SectionWrapper>

      {/* ===== CATEGORIES ===== */}
      <SectionWrapper className="bg-[var(--bg-gray)] pt-3 pb-8">
        <Categories />
      </SectionWrapper>

      {/* ===== SERVICES ===== */}
      <SectionWrapper className="my-12.5">
        <FreeShipping />
      </SectionWrapper>

      {/* ===== SUB BANNERS ===== */}
      <SectionWrapper className="pb-12.5">
        <SubBanner />
      </SectionWrapper>

      {/* ===== POPULAR PRODUCTS ===== */}
      <SectionWrapper className="popular_products pb-12.5 mt-4">
        <PopularProducts />
      </SectionWrapper>

      {/* ===== OFFER BANNER ===== */}
      <OfferBanner />

      {/* ===== LATEST PRODUCTS ===== */}
      <SectionWrapper className="mt-12.5">
        <ProductsSlider title="Latest Products" />
      </SectionWrapper>

      {/* ===== PROMO BANNERS (TOP) ===== */}
      <SectionWrapper className="mt-11">
        <PromoSection data={promoData1} />
      </SectionWrapper>

      {/* ===== FEATURED PRODUCTS ===== */}
      <SectionWrapper className="mt-12.5">
        <ProductsSlider title={"Featured Products"} />
      </SectionWrapper>

      {/* ===== DEAL OF THE DAY ===== */}
      <SectionWrapper className="mt-12.5">
        <ProductsSlider title={"Deal of the day"} />
      </SectionWrapper>

      {/* ===== PROMO BANNERS (BOTTOM) ===== */}
      <SectionWrapper className="mt-11">
        <PromoSection data={promoData2} />
      </SectionWrapper>

      {/* ===== BEST SELLING ===== */}
      <SectionWrapper className="mt-14">
        <ProductsSlider title={"Best Selling Products"} />
      </SectionWrapper>

      {/* ===== FEATURES ===== */}
      <SectionWrapper className="mt-11 mb-12.5">
        <Features />
      </SectionWrapper>
    </>
  );
};

export default Home;
