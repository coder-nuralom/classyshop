import React from "react";
import { FaShippingFast } from "react-icons/fa";

const FreeShipping = () => {
  return (
    <div className="flex flex-col gap-3 lg:gap-0 items-center lg:flex-row lg:items-stretch lg:justify-between py-6 px-6 sm:px-12.5 border-2 border-[var(--bg-orange)] rounded-[5px]">
      <div className="col_1 flex items-center gap-3.5 shrink-0">
        <FaShippingFast className="transform scale-x-[-1] text-4xl max-[420px]:text-3xl" />
        <p className="text-[26px] max-[420px]:text-[22px] max-[380px]:text-lg max-[344px]:text-base lg:text-xl xl:text-[26px] uppercase  font-semibold tracking-tight">
          Free Shipping
        </p>
      </div>
      <div className="col_2 flex items-center px-0 md:px-4 xl:px-16 lg:border-x lg:border-black/15">
        <p className="text-base max-[380px]:text-[15px] text-black font-medium text-center">
          Free delivery now on your first order and over $200
        </p>
      </div>
      <div className="col_3 flex items-center shrink-0">
        <p className="text-[26px] max-[420px]:text-[22px] max-[380px]:text-lg max-[344px]:text-base lg:text-xl xl:text-[26px] uppercase font-semibold tracking-tight">
          - Only $200*
        </p>
      </div>
    </div>
  );
};

export default FreeShipping;
