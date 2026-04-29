import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { Collapse } from "react-collapse";
import RangeSlider from "react-range-slider-input";
import "../../node_modules/react-range-slider-input/dist/style.css";

const SideBar = () => {
  const ratings = [5, 4, 3, 2, 1];
  const [openCategories, setOpenCategories] = useState(true);
  const [oprenBrand, setOprenBrand] = useState(true);
  const [openPriceRange, setOpenPriceRange] = useState(true);
  const [openRating, setOpenRating] = useState(true);

  return (
    <aside className="space-y-6">
      {/* Filter By Categroy */}
      <div className="border border-black/10 py-3 px-3.5 rounded-[5px]">
        <h3
          onClick={() => setOpenCategories(!openCategories)}
          className={`flex items-center justify-between cursor-pointer text-base lg:text-sm xl:text-base text-black/90 font-medium px-0.5 border-[#e5e5e5] transition-all duration-400 ease-in-out ${openCategories ? "pb-[10px] border-b" : "pb-0 border-none"}`}
        >
          Shop By Category
          {openCategories ? (
            <FaChevronUp className="text-base lg:text-xs xl:text-base" />
          ) : (
            <FaChevronDown className="text-base lg:text-xs xl:text-base" />
          )}
        </h3>

        <Collapse isOpened={openCategories}>
          <div
            className={`mt-5 pb-3 space-y-5 custom-scrollber ${[...Array(10)].length > 10 ? "max-h-100 overflow-y-auto" : "max-h-fit overflow-y-visible"}`}
          >
            {[...Array(10)].map((_, index) => (
              <div key={index} className="flex items-center gap-2">
                <input id="check1" type="checkBox" className="shrink-0 w-4 h-4 text-white" />
                <label htmlFor="check1" className="text-[15px] leading-none font-normal">
                  Fashion
                </label>
              </div>
            ))}
          </div>
        </Collapse>
      </div>

      {/* Filter By Brand */}
      <div className="border border-black/10 py-3 px-3.5 rounded-[5px]">
        <h3
          onClick={() => setOprenBrand(!oprenBrand)}
          className={`flex items-center justify-between cursor-pointer text-base lg:text-sm xl:text-base text-black/90 font-medium px-0.5 border-[#e5e5e5] transition-all duration-400 ease-in-out ${oprenBrand ? "pb-[10px] border-b" : "pb-0 border-none"}`}
        >
          Shop By Brand
          {oprenBrand ? (
            <FaChevronUp className="text-base lg:text-xs xl:text-base" />
          ) : (
            <FaChevronDown className="text-base lg:text-xs xl:text-base" />
          )}
        </h3>

        <Collapse isOpened={oprenBrand}>
          <div
            className={`mt-5 pb-3 space-y-5 custom-scrollber ${[...Array(10)].length > 10 ? "max-h-100 overflow-y-auto" : "max-h-fit overflow-y-visible"}`}
          >
            {[...Array(10)].map((_, index) => (
              <div key={index} className="flex items-center gap-2">
                <input id="check1" type="checkBox" className="shrink-0 w-4 h-4 text-white" />
                <label htmlFor="check1" className="text-[15px] leading-none font-normal">
                  Puma
                </label>
              </div>
            ))}
          </div>
        </Collapse>
      </div>

      {/* Filter By Price */}
      <div className="border border-black/10 py-3 px-3.5 rounded-[5px]">
        <h3
          onClick={() => setOpenPriceRange(!openPriceRange)}
          className={`flex items-center justify-between cursor-pointer text-base lg:text-sm xl:text-base text-black/90 font-medium px-0.5 border-[#e5e5e5] transition-all duration-400 ease-in-out ${openPriceRange ? "pb-[10px] border-b" : "pb-0 border-none"}`}
        >
          Filter By Price
          {openCategories ? (
            <FaChevronUp className="text-base lg:text-xs xl:text-base" />
          ) : (
            <FaChevronDown className="text-base lg:text-xs xl:text-base" />
          )}
        </h3>
        <Collapse isOpened={openPriceRange}>
          <div className="mt-6">
            <RangeSlider.default defaultValue={[0, 700]} min={100} max={1000} />
          </div>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-sm font-medium">
              From: <strong className="text-[15px] text-[var(--bg-orange)]">{0}$</strong>
            </span>
            <span className="text-sm font-medium">
              To: <strong className="text-[15px] text-[var(--bg-orange)]">{1000}$</strong>
            </span>
          </div>
        </Collapse>
      </div>

      {/* Filter By Rating */}
      <div className="border border-black/10 py-3 px-3.5 rounded-[5px]">
        <h3
          onClick={() => setOpenRating(!openRating)}
          className={`flex items-center justify-between cursor-pointer text-base lg:text-sm xl:text-base text-black/90 font-medium px-0.5 border-[#e5e5e5] transition-all duration-400 ease-in-out ${openRating ? "pb-[10px] border-b" : "pb-0 border-none"}`}
        >
          Filter By Rating
          {openRating ? (
            <FaChevronUp className="text-base lg:text-xs xl:text-base" />
          ) : (
            <FaChevronDown className="text-base lg:text-xs xl:text-base" />
          )}
        </h3>
        <Collapse isOpened={openRating}>
          <div className="space-y-3 mt-4 cursor-pointer">
            {ratings.map((value, index) => (
              <div key={index} className="flex items-center gap-x-1">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className={`${value > index ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </Collapse>
      </div>
    </aside>
  );
};

export default SideBar;
