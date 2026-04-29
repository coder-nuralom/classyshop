import React from "react";
import offerBanner1 from "../assets/offer-banner-1.jpg";

const OfferBanner = () => {
  return (
    <section className="mb-12.5">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="relative">
          <img
            src={offerBanner1}
            alt=""
            className="w-full h-27 rounded-[5px] object-fill md:object-fill"
          />
          <div className="absolute w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  flex flex-col md:flex-row items-center justify-center md:gap-x-7">
            <h2 className="text-[26px] md:text-[45px] tracking-tight font-semibold uppercase text-white">
              watch
            </h2>
            <div>
              <p className="text-sm md:text-base text-white font-medium text-center md:text-start">
                M6 Smart Band 2.3 – Fitness Band
              </p>
              <p className="text-sm md:text-base text-white font-medium text-center md:text-start">
                Men’s and Women’s Health Tracking, Red Strap
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferBanner;
