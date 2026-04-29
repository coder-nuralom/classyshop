import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css/effect-fade";
import mainbanner1 from "../assets/main-banner-1.jpg";
import mainbanner2 from "../assets/main-banner-2.jpg";
import banner1 from "../assets/sub-banner-1.webp";
import banner2 from "../assets/sub-banner-2.webp";
const HomeSlider = () => {
  return (
    <div className="flex flex-col lg:flex-row items-stretch gap-8">
      <div className="w-full lg:w-[72%] rounded-md overflow-hidden shadow-sm">
        <Swiper
          pagination={{ clickable: true }}
          modules={[EffectFade, Pagination, Autoplay]}
          autoplay={{ delay: 3000 }}
          effect="fade"
          loop={true}
          className="h-full"
        >
          <SwiperSlide>
            <div
              className="p-13 max-[431px]:px-6 bg-center bg-no-repeat rounded-md h-full flex items-center justify-center lg:justify-end cursor-pointer"
              style={{ backgroundImage: `url(${mainbanner1})` }}
            >
              <div className="w-[350px] content-box">
                <p className="mb-[17px] text-lg max-[575px]:text-base font-medium text-[#111111] capitalize">
                  Big Savings Days Sale
                </p>
                <h1 className="text-[34px] max-[575px]:text-[28px] max-[450px]:text-[24px] capitalize font-semibold tracking-tight text-[#111111]">
                  women solid round green t-shirt
                </h1>
                <p className="mb-10 text-lg max-[575px]:text-base font-medium text-[#111111] capitalize">
                  starting at only{" "}
                  <span className="text-[30px] max-[575px]:text-[25px] max-[450px]:text-[22px] text-[var(--bg-orange)]">
                    $59.00
                  </span>
                </p>
                <Link className="px-6 py-3 max-[575px]:px-4 max-[575px]:py-2 border-1 border-[var(--bg-orange)] bg-[var(--bg-orange)] text-white rounded-sm uppercase font-medium text-[15px]">
                  Shop Now
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="p-13 max-[431px]:px-6 bg-center bg-no-repeat rounded-md h-full flex items-center justify-center lg:justify-end cursor-pointer"
              style={{ backgroundImage: `url(${mainbanner2})` }}
            >
              <div className="w-[350px] content-box">
                <p className="mb-[17px] text-lg max-[575px]:text-base font-medium text-[#111111] capitalize">
                  Big Savings Days Sale
                </p>
                <h1 className="text-[34px] max-[575px]:text-[28px] max-[450px]:text-[24px] capitalize font-semibold tracking-tight text-[#111111]">
                  women solid round green t-shirt
                </h1>
                <p className="mb-10 text-lg max-[575px]:text-base font-medium text-[#111111] capitalize">
                  starting at only{" "}
                  <span className="text-[30px] max-[575px]:text-[25px] max-[450px]:text-[22px] text-[var(--bg-orange)]">
                    $59.00
                  </span>
                </p>
                <Link className="px-6 py-3 max-[575px]:px-4 max-[575px]:py-2 border-1 border-[var(--bg-orange)] bg-[var(--bg-orange)] text-white rounded-sm uppercase font-medium text-[15px]">
                  Shop Now
                </Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="w-full lg:w-[28%] h-full flex flex-col sm:flex-row lg:flex-col gap-7">
        <div className="flex-1 relative">
          <img src={banner1} alt="flash sale" className="rounded-md w-full h-auto" />
          <div className="absolute top-1/2 -translate-y-1/2 left-[8.5%] tracking-tight">
            <h2 className="text-[22px] font-semibold">
              Samsung Gear <br /> VR Camera
            </h2>
            <p className="text-xl text-[var(--bg-orange)] font-bold my-1.5">$129.00</p>
            <Link className="uppercase font-medium text-sm underline">Shop Now</Link>
          </div>
        </div>
        <div className="flex-1 relative">
          <img src={banner2} alt="flash sale" className="rounded-md w-full h-auto" />
          <div className="absolute top-1/2 -translate-y-1/2 right-[8.5%] tracking-tight">
            <h2 className="text-[22px] font-semibold">
              Marcel Dining <br /> Room Chair
            </h2>
            <p className="text-xl text-[var(--bg-orange)] font-bold my-1.5">$129.00</p>
            <Link className="uppercase font-medium text-sm underline">Shop Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;
