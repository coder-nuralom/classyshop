import React, { useState } from "react";
import { IoGridOutline } from "react-icons/io5";
import { FaList } from "react-icons/fa";
import { FaSortDown } from "react-icons/fa";
import { Collapse } from "react-collapse";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { toggleFilter } from "../../features/filterSlice";

const ShopHeader = ({ isGrid, setIsGrid }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Relevance");
  const [activeFilters, setActiveFilters] = useState([]);
  const dispatch = useDispatch();
  const options = [
    "Sales, highest to lowest",
    "Relevance",
    "Name, A to Z",
    "Name, Z to A",
    "Price, low to high",
    "Price, high to low",
    "Reference, A to Z",
    "Reference, Z to A",
  ];
  return (
    <div className="py-3 px-5 bg-gray-100 mb-3 rounded-md">
      <div className="flex flex-row max-[490px]:flex-col items-center max-[490px]:items-start gap-y-3 justify-between">
        <div className="flex items-center gap-6 max-[575px]:gap-4">
          <button
            onClick={() => setIsGrid(true)}
            className={`cursor-pointer ${isGrid ? "text-[var(--bg-orange)]" : "text-gray-600"}`}
          >
            <IoGridOutline className="text-2xl max-[575px]:text-xl" />
          </button>
          <button
            onClick={() => setIsGrid(false)}
            className={`cursor-pointer ${isGrid ? "text-gray-600" : "text-[var(--bg-orange)]"}`}
          >
            <FaList className="text-2xl max-[575px]:text-xl" />
          </button>
        </div>

        <div className="flex items-center gap-4 max-[350px]:gap-2">
          <span className="text-base font-medium hidden md:block">Sort By :</span>
          <div className="relative min-w-42 sm:w-60 md:w-75">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full flex items-center justify-between border border-gray-300 rounded-md px-4 max-[575px]:px-2 py-2 max-[575px]:py-1.5 text-[15px] max-[380px]:text-xs font-medium bg-white  text-gray-800 focus:outline-none cursor-pointer"
            >
              {selected}
              <FaSortDown className="mb-1.5" />
            </button>

            <div className="dropdown absolute left-0 top-full z-90 w-full">
              <Collapse isOpened={isOpen}>
                <ul className="border border-gray-300 bg-white rounded-md py-2 transition-all duration-200">
                  {options.map((option, index) => (
                    <li
                      onClick={() => {
                        (setSelected(option), setIsOpen(false));
                      }}
                      key={index}
                      className="hover:bg-[var(--bg-orange)] px-4 py-[5px] hover:text-white cursor-pointer text-[15px] max-[380px]:text-xs"
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              </Collapse>
            </div>
          </div>

          <button
            onClick={() => dispatch(toggleFilter())}
            className="bg-[var(--bg-orange)] text-white text-base max-[575px]:text-sm font-medium px-8 max-[575px]:px-4 py-2 max-[575px]:px-1.5  rounded-md cursor-pointer max-[380px]:text-xs lg:hidden"
          >
            Filter
          </button>
        </div>
      </div>

      {activeFilters.length > 0 && (
        <div className="mt-3 lg:hidden">
          <span className="font-medium text-[15px] ">Active Filters : </span>

          <span className="space-x-2 space-y-2 text-[13px]">
            <span className="inline-flex items-center gap-1 bg-gray-200 px-2 py-1 rounded-sm ">
              Categories : Anklet
              <RxCross2 />
            </span>
            <span className="inline-flex items-center gap-1 bg-gray-200 px-2 py-1 rounded-sm">
              Categories : Barrette
              <RxCross2 />
            </span>
            <span className="inline-flex items-center gap-1 bg-gray-200 px-2 py-1 rounded-sm">
              Brand : Puma
              <RxCross2 />
            </span>
          </span>
        </div>
      )}
    </div>
  );
};

export default ShopHeader;
