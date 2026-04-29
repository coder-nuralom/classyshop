import React, { useEffect, useState } from "react";
import { InnerImageZoom } from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/styles.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Navigation, FreeMode, Thumbs } from "swiper/modules";
import { FaAngleDown, FaAngleUp, FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import img1 from "../assets/oval-blue-charm-bracelet-2.webp";
import img2 from "../assets/product1.webp";

const ProductZoom = ({ product }) => {
  const images = product.gallery;
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [isVertical, setIsVertical] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;

      if (w >= 1280) setIsVertical(true);
      else if (w >= 901) setIsVertical(false);
      else if (w >= 640) setIsVertical(true);
      else setIsVertical(false);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`flex gap-6 ${isVertical ? "flex-row" : "flex-col"}`}>
      <div
        className={`${
          isVertical
            ? "w-[15%] sm:h-[450px] min-[901px]:h-[450px] xl:h-[490px] flex-col"
            : "w-full h-auto flex-row"
        } flex gap-x-2 justify-between shrink-0 ${isVertical ? "order-1" : "order-2"}`}
      >
        <div>
          <button
            className={`prev flex items-center justify-center bg-[#a0aec0]/20 ${isVertical ? " w-full h-[30px]" : " w-[28px] h-full"} mb-3 cursor-pointer hover:bg-[var(--bg-orange)] hover:text-white text-black/60 text-xl`}
          >
            {isVertical ? <FaAngleUp /> : <FaAngleLeft />}
          </button>
        </div>

        <Swiper
          direction={isVertical ? "vertical" : "horizontal"}
          slidesPerView={4}
          spaceBetween={12}
          watchSlidesProgress={true}
          slideToClickedSlide={true}
          navigation={{ nextEl: ".next", prevEl: ".prev" }}
          onSwiper={setThumbsSwiper}
          modules={[FreeMode, Navigation, Thumbs]}
          className="w-full image_zoom"
        >
          {images.map((img, index) => (
            <SwiperSlide
              key={index}
              className="border border-black/15 rounded-md overflow-hidden"
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>

        <div>
          <button
            className={`next flex items-center justify-center bg-[#a0aec0]/20 ${isVertical ? " w-full h-[30px] mt-3" : " w-[28px] h-full"} cursor-pointer hover:bg-[var(--bg-orange)] hover:text-white text-black/60 text-xl`}
          >
            {isVertical ? <FaAngleDown /> : <FaAngleRight />}
          </button>
        </div>
      </div>

      <div
        className={`flex-1 min-w-0 border border-black/15 rounded-md overflow-hidden h-[400px] sm:h-[450px] xl:h-[490px] ${isVertical ? "order-2" : "order-1"}`}
      >
        <Swiper
          thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
          loop={false}
          spaceBetween={10}
          slidesPerView={1}
          modules={[FreeMode, Navigation, Thumbs]}
          className="h-full w-full"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index} className="h-full">
              <InnerImageZoom src={img} zoomType="hover" hideHint={true} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductZoom;
