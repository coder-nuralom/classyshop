import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { LuFilter } from "react-icons/lu";
import SideBar from "./SideBar";
import { useDispatch, useSelector } from "react-redux";
import { toggleFilter } from "../../features/filterSlice";

const FilterDwarer = () => {
  const isFilterOpen = useSelector((state) => state.filter.isFilterOpen);
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => dispatch(toggleFilter())}
      className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-90 transition-opacity duration-300 ${isFilterOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`fixed top-0 left-0 z-[100] h-full w-[80%] min-[410px]:w-xs sm:w-sm bg-white shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out  ${isFilterOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Cart Header */}
        <div className="flex items-center justify-between  px-4 py-5 bg-gray-50 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 flex items-center space-x-2">
            <LuFilter className="text-[var(--bg-orange)] text-2xl" />
            <span>Filter Product</span>
          </h2>
          <button
            onClick={() => dispatch(toggleFilter())}
            className="p-2 hover:bg-[var(--bg-orange)]/30 rounded-full transition-colors duration-200 cursor-pointer"
          >
            <RxCross2 className="h-6 w-6" />
          </button>
        </div>

        <div className="filter_drawer px-4 py-6 overflow-y-auto">
          <SideBar />
        </div>
      </div>
    </div>
  );
};

export default FilterDwarer;
