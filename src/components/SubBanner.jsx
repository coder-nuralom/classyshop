import React from "react";
import subBanner3 from "../assets/sub-banner-3.webp";
import subBanner4 from "../assets/sub-banner-4.webp";
import subBanner5 from "../assets/sub-banner-5.webp";
import { Link } from "react-router-dom";
const SubBanner = () => {
  return (
    <div className="flex flex-col gap-y-6 md:flex-row md:items-center md:justify-between md:gap-x-3 lg:gap-7">
      <div className="col_1 relative rounded-md overflow-hidden">
        <img
          src={subBanner3}
          alt="Banner"
          className="w-full h-56 rounded-md hover:scale-105 transition-all duration-200 ease-in-out object-cover"
        />
        <div className="absolute top-1/2 -translate-y-1/2 right-9 md:right-5 lg:right-9 max-[575px]:text-right">
          <h4 className="text-[22px] md:text-base lg:text-[22px] font-semibold leading-7 lg:leading-7.5  tracking-tight">
            S22 Samsung <br />
            Smartphone
          </h4>
          <p className="text-xl md:text-lg lg:text-xl text-[var(--bg-orange)] font-bold my-2">
            $250.00
          </p>
          <Link className="uppercase font-semibold text-sm underline">Shop Now</Link>
        </div>
      </div>
      <div className="col_2 relative rounded-md overflow-hidden">
        <img
          src={subBanner4}
          alt="Banner"
          className="w-full h-56 rounded-md hover:scale-105 transition-all duration-200 ease-in-out object-cover"
        />
        <div className="absolute top-1/2 -translate-y-1/2 right-9 md:right-5 lg:right-9 max-[575px]:text-right">
          <h4 className="text-[22px] md:text-base lg:text-[22px] font-semibold leading-7 lg:leading-7.5 tracking-tight">
            Armchair Mad <br />
            By Shopstic
          </h4>
          <p className="text-xl md:text-lg lg:text-xl text-[var(--bg-orange)] font-bold my-2">
            $190.00
          </p>
          <Link className="uppercase font-semibold text-sm underline">Shop Now</Link>
        </div>
      </div>
      <div className="col_3 relative rounded-md overflow-hidden">
        <img
          src={subBanner5}
          alt="Banner"
          className="w-full h-56 rounded-md hover:scale-105 transition-all duration-200 ease-in-out object-cover"
        />
        <div className="absolute top-1/2 -translate-y-1/2 right-9 md:right-5 lg:right-9 max-[575px]:text-right">
          <h4 className="text-[22px] md:text-base lg:text-[22px] font-semibold leading-7 lg:leading-7.5 tracking-tight">
            Noise Wireless <br /> Headphones
          </h4>
          <p className="text-xl md:text-lg lg:text-xl text-[var(--bg-orange)] font-bold my-2">
            $129.00
          </p>
          <Link className="uppercase font-semibold text-sm underline">Shop Now</Link>
        </div>
      </div>
    </div>
  );
};

export default SubBanner;
