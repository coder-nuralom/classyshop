import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { Collapse } from "react-collapse";
import RangeSlider from "react-range-slider-input";
import "../../node_modules/react-range-slider-input/dist/style.css";
import categories from "../../Data/categoryData";
import products from "../../Data/productsData";
import { useDispatch, useSelector } from "react-redux";
import {
  setBrands,
  setCategoryIds,
  setPriceRange,
  setRating,
} from "../../features/productFilterSlice";

const SideBar = () => {
  const dispatch = useDispatch();
  const selectedCategoryIds = useSelector((state) => state.productFilter.categoryIds);
  const priceRange = useSelector((state) => state.productFilter.priceRange);
  const SelectedRating = useSelector((state) => state.productFilter.rating);
  const selectedBrands = useSelector((state) => state.productFilter.brands);

  const ratings = [5, 4, 3, 2, 1];
  const allBrands = [...new Set(products.map((product) => product.brand))];
  const [openCategories, setOpenCategories] = useState(true);
  const [openBrand, setOpenBrand] = useState(true);
  const [openPriceRange, setOpenPriceRange] = useState(true);
  const [openRating, setOpenRating] = useState(true);

  const getLeafCategrories = (categories) => {
    let result = [];

    const traverse = (items) => {
      items.forEach((item) => {
        if (item.children && item.children.length > 0) {
          traverse(item.children);
        } else {
          result.push(item);
        }
      });
    };
    traverse(categories);
    return result;
  };

  const leafCategories = getLeafCategrories(categories);

  const handleCategoryChange = (id) => {
    let updated = [];

    if (selectedCategoryIds?.includes(id)) {
      updated = selectedCategoryIds.filter((item) => item !== id);
    } else {
      updated = [...selectedCategoryIds, id];
    }

    dispatch(setCategoryIds(updated));
  };

  const handleBrandChange = (brand) => {
    let updated = [];

    if (selectedBrands?.includes(brand)) {
      updated = selectedBrands.filter((item) => item !== brand);
    } else {
      updated = [...selectedBrands, brand];
    }

    dispatch(setBrands(updated));
  };

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
            {leafCategories.map((category, index) => (
              <div key={index} className="flex items-center gap-2">
                <input
                  id={index}
                  type="checkbox"
                  checked={selectedCategoryIds?.includes(category.id) || false}
                  onChange={() => handleCategoryChange(category.id)}
                  className="shrink-0 w-4 h-4"
                />
                <label htmlFor={index} className="text-[15px] leading-none font-normal">
                  {category.name}
                </label>
              </div>
            ))}
          </div>
        </Collapse>
      </div>

      {/* Filter By Brand */}
      <div className="border border-black/10 py-3 px-3.5 rounded-[5px]">
        <h3
          onClick={() => setOpenBrand(!openBrand)}
          className={`flex items-center justify-between cursor-pointer text-base lg:text-sm xl:text-base text-black/90 font-medium px-0.5 border-[#e5e5e5] transition-all duration-400 ease-in-out ${openBrand ? "pb-[10px] border-b" : "pb-0 border-none"}`}
        >
          Shop By Brand
          {openBrand ? (
            <FaChevronUp className="text-base lg:text-xs xl:text-base" />
          ) : (
            <FaChevronDown className="text-base lg:text-xs xl:text-base" />
          )}
        </h3>

        <Collapse isOpened={openBrand}>
          <div
            className={`mt-5 pb-3 space-y-5 custom-scrollber ${[...Array(10)].length > 10 ? "max-h-100 overflow-y-auto" : "max-h-fit overflow-y-visible"}`}
          >
            {allBrands.map((brand, index) => (
              <div key={brand} className="flex items-center gap-2">
                <input
                  id={brand}
                  checked={selectedBrands?.includes(brand) || false}
                  onChange={() => handleBrandChange(brand)}
                  type="checkbox"
                  className="shrink-0 w-4 h-4 text-white"
                />
                <label htmlFor={brand} className="text-[15px] leading-none font-normal">
                  {brand}
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
            <RangeSlider.default
              defaultValue={priceRange}
              min={0}
              max={1000}
              onInput={(value) => dispatch(setPriceRange(value))}
            />
          </div>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-sm font-medium">
              From:
              <strong className="text-[15px] text-[var(--bg-orange)]">{priceRange[0]}$</strong>
            </span>
            <span className="text-sm font-medium">
              To:
              <strong className="text-[15px] text-[var(--bg-orange)]">{priceRange[1]}$</strong>
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
              <div
                onClick={() => dispatch(setRating(value))}
                key={index}
                className="flex items-center gap-x-1"
              >
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
