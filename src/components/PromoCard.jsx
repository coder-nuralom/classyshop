import React from "react";
import { Link } from "react-router-dom";

const PromoCard = ({ image, subtitle, title, button }) => {
  return (
    <div className="h-62 overflow-hidden w-fit rounded-md relative">
      <Link>
        <img
          src={image}
          alt={subtitle}
          className="w-full h-full rounded-md hover:scale-105 duration-300 overflow-hidden object-cover"
        />
      </Link>
      <div className="absolute w-[80%] lg:w-[60%] h-[100%] top-0 left-[25px] sm:left-[50px] md:left-[25px] lg:left-[50px] flex flex-col items-start justify-center">
        <p className="max-[505px]:text-base text-lg capitalize text-black/95 font-medium">
          {subtitle}
        </p>
        <h2 className="whitespace-pre-line max-[505px]:text-[20px] md:text-[24px] text-[25px]  leading-8.5 tracking-tight font-semibold text-black/90 capitalize mt-3.5 mb-4">
          {title}
        </h2>
        <button className="bg-[var(--bg-orange)] px-6 py-[12px] max-[505px]:px-5 max-[505px]:py-[10px] text-white uppercase text-sm font-medium rounded-md hover:bg-black/95 duration-300 cursor-pointer">
          <Link>{button}</Link>
        </button>
      </div>
    </div>
  );
};

export default PromoCard;
