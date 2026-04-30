import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import homeCategories from "../../Data/homeCategroyData";

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
        {homeCategories.map((category) => (
          <SwiperSlide key={category.id}>
            <Link to={`/category/${category.slug}`}>
              <div className="bg-white py-2 relative rounded-lg">
                <img src={category.image} alt="category" />
                <div className="absolute w-full bottom-4 text-center">
                  <h3 className="capitalize text-[15px] font-medium ">{category.name}</h3>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Categories;
