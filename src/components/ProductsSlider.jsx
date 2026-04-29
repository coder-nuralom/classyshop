import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import ProductCard from "./ProductCard";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const ProductsSlider = ({ title }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-black/90 text-lg min-[475px]:text-xl md:text-[23px] font-semibold capitalize">
          {title}
        </h2>
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
        pagination={false}
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
        {[...Array(20)].map((_, index) => (
          <SwiperSlide key={index} className="overflow-visible my-4">
            <ProductCard />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductsSlider;
