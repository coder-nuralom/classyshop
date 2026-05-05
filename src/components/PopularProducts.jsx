import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import ProductCard from "./ProductCard";
import { FaCaretLeft } from "react-icons/fa6";
import { FaCaretRight } from "react-icons/fa6";
import products from "../../Data/productsData";
import categories from "../../Data/categoryData";

const PopularProducts = () => {
  const [showArrows, setShowArrows] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    const el = scrollRef.current;
    if (!el) return;

    el.scrollBy({
      left: -el.clientWidth,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    const el = scrollRef.current;
    if (!el) return;

    el.scrollBy({
      left: el.clientWidth,
      behavior: "smooth",
    });
  };

  const checkOverflow = () => {
    const el = scrollRef.current;
    if (!el) return;

    setShowArrows(el.scrollWidth > el.clientWidth);
  };

  useEffect(() => {
    checkOverflow();

    window.addEventListener("resize", checkOverflow);

    return () => window.removeEventListener("resize", checkOverflow);
  }, []);

  const handleScroll = () => {
    const el = scrollRef.current;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth);
  };

  const [selectedCategroy, setSelectedCategroy] = useState(categories[0] || null);

  const getAllChildIdsFromTree = (category) => {
    let ids = [];

    const traverse = (categoryItem) => {
      ids.push(categoryItem.id);

      if (categoryItem.children && categoryItem.children.length > 0) {
        categoryItem.children.forEach((child) => traverse(child));
      }
    };

    traverse(category);
    return ids;
  };

  const selectedCategoryIds = selectedCategroy ? getAllChildIdsFromTree(selectedCategroy) : [];

  const filteredProducts = products.filter((item) =>
    selectedCategoryIds.includes(item.categoryId),
  );

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className={`relative w-[65%] ${showArrows && "px-10"}`}>
          {showArrows && (
            <button
              disabled={!canScrollLeft}
              onClick={scrollLeft}
              className={`absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-sm p-1 cursor-pointer ${!canScrollLeft && "opacity-40"}`}
            >
              <FaCaretLeft className="text-xl" />
            </button>
          )}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="all_categories flex items-center overflow-x-auto gap-x-5 md:gap-x-8"
          >
            {categories.slice(0, 3).map((item, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategroy(item)}
                className={`text-base md:text-lg font-medium capitalize leading-tight cursor-pointer whitespace-nowrap ${
                  selectedCategroy?.id === item.id ? "text-[#ff5252]" : "text-black/80"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
          {showArrows && (
            <button
              disabled={!canScrollRight}
              onClick={scrollRight}
              className={`absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-sm p-1 cursor-pointer ${!canScrollRight && "opacity-40"}`}
            >
              <FaCaretRight className="text-xl" />
            </button>
          )}
        </div>
        <div className="flex items-center justify-end gap-x-3">
          <button
            ref={prevRef}
            className="text-2xl text-zinc-800 w-7 h-7 flex items-center justify-center rounded-md bg-zinc-100 cursor-pointer hover:bg-[var(--bg-orange)] hover:text-white transition duration-300 custom-prev"
          >
            <IoIosArrowBack />
          </button>
          <button
            ref={nextRef}
            className="text-2xl text-zinc-800 w-7 h-7 flex items-center justify-center rounded-md bg-zinc-100 cursor-pointer hover:bg-[var(--bg-orange)] hover:text-white transition duration-300 custom-next"
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
      <Swiper
        className="mt-2"
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef?.current;
          swiper.params.navigation.nextEl = nextRef?.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        navigation={{
          prevEl: prevRef?.current,
          nextEl: nextRef?.current,
        }}
        slidesPerView={2}
        spaceBetween={10}
        loop={false}
        breakpoints={{
          450: { slidesPerView: 2, spaceBetween: 20 },
          640: { slidesPerView: 2, spaceBetween: 25 },
          768: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 20 },
          1280: { slidesPerView: 5, spaceBetween: 20 },
        }}
        modules={[Navigation]}
      >
        {filteredProducts.map((product) => (
          <SwiperSlide key={product.id} className="overflow-visible my-4">
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopularProducts;
