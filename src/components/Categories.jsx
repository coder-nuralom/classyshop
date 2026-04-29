import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import cat1 from "../assets/cat-1.webp";
import cat2 from "../assets/cat-2.webp";
import cat3 from "../assets/cat-3.webp";
import cat4 from "../assets/cat-4.webp";
import cat5 from "../assets/cat-5.webp";
import cat6 from "../assets/cat-6.webp";
import cat7 from "../assets/cat-7.webp";
import cat8 from "../assets/cat-8.webp";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div>
      <Swiper
        slidesPerView={2}
        spaceBetween={25}
        pagination={false}
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 1500 }}
        loop={true}
        breakpoints={{
          450: { slidesPerView: 3, spaceBetween: 15 },
          640: { slidesPerView: 4, spaceBetween: 20 },
          768: { slidesPerView: 5, spaceBetween: 20 },
          1024: { slidesPerView: 7, spaceBetween: 20 },
        }}
      >
        <SwiperSlide>
          <Link to="/category/fashion">
            <div className="bg-white py-2 relative rounded-lg">
              <img src={cat1} alt="category" />
              <div className="absolute w-full bottom-4 text-center">
                <h3 className="capitalize text-[15px] font-medium ">Fashion</h3>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/category/electronics">
            <div className="bg-white py-2 relative rounded-lg">
              <img src={cat2} alt="category" />
              <div className="absolute w-full bottom-4 text-center">
                <h3 className="capitalize text-[15px] font-medium ">Electronics</h3>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/category/home">
            <div className="bg-white py-2 relative rounded-lg">
              <img src={cat3} alt="category" />
              <div className="absolute w-full bottom-4 text-center">
                <h3 className="capitalize text-[15px] font-medium ">Home</h3>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/category/fashion">
            <div className="bg-white py-2 relative rounded-lg">
              <img src={cat4} alt="category" />
              <div className="absolute w-full bottom-4 text-center">
                <h3 className="capitalize text-[15px] font-medium ">Fashion</h3>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/category/electronics">
            <div className="bg-white py-2 relative rounded-lg">
              <img src={cat5} alt="category" />
              <div className="absolute w-full bottom-4 text-center">
                <h3 className="capitalize text-[15px] font-medium ">Electronics</h3>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/category/home">
            <div className="bg-white py-2 relative rounded-lg">
              <img src={cat6} alt="category" />
              <div className="absolute w-full bottom-4 text-center">
                <h3 className="capitalize text-[15px] font-medium ">Home</h3>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/category/fashion">
            <div className="bg-white py-2 relative rounded-lg">
              <img src={cat7} alt="category" />
              <div className="absolute w-full bottom-4 text-center">
                <h3 className="capitalize text-[15px] font-medium ">Fashion</h3>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/category/electronics">
            <div className="bg-white py-2 relative rounded-lg">
              <img src={cat8} alt="category" />
              <div className="absolute w-full bottom-4 text-center">
                <h3 className="capitalize text-[15px] font-medium ">Electronics</h3>
              </div>
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Categories;
