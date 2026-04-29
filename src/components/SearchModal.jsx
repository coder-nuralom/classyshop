import React, { useRef, useState } from "react";
import { Collapse } from "react-collapse";
import categoryData from "../../Data/categoryData";
import { IoChevronDown } from "react-icons/io5";
import { IoChevronUp } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { toggleSearchModal } from "../../features/searchModalSlice";

const SearchModal = () => {
  const categoryRef = useRef(null);
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const isOpen = useSelector((state) => state.searchModal.showSearchModal);

  const parentCategories = [
    { _id: "all", name: "All Categories" },
    ...categoryData.filter((cat) => cat.parentCategoryId === null),
  ];
  return (
    <div
      onClick={() => dispatch(toggleSearchModal())}
      className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-90 transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`h-60 fixed top-0 left-0 right-0 z-100 bg-white px-5 sm:px-10 flex flex-col items-start justify-center transition-all duration-300 ${isOpen ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="w-full text-end">
          <div
            onClick={() => dispatch(toggleSearchModal())}
            className="p-1.5 border border-black/10 rounded-sm mb-2 inline-block"
          >
            <RxCross1 className="text-[18px] sm:text-[24px]" />
          </div>
        </div>
        <form className="border-2 border-[var(--bg-orange)] rounded-[5px] flex items-center text-[var(--text-gray)] w-full">
          <div ref={categoryRef} className="relative max-[575px]:hidden">
            <button
              onClick={() => setShowCategoryDropdown((prev) => !prev)}
              type="button"
              className="text-sm xl:text-base font-normal cursor-pointer w-fit px-2 h-full flex items-center gap-x-2 whitespace-nowrap"
            >
              {selectedCategory}
              {showCategoryDropdown ? (
                <IoChevronUp className="ml-1" />
              ) : (
                <IoChevronDown className="ml-1" />
              )}
            </button>
            <div className="categroy_dowpdown absolute left-0 top-full w-55 z-20 mt-2.5">
              <Collapse isOpened={showCategoryDropdown}>
                <ul className="max-h-120 w-fit overflow-y-auto bg-white border border-gray-200 rounded-md shadow-lg transition-all duration-200">
                  {parentCategories.map((category) => (
                    <li
                      key={category._id}
                      className="hover:bg-[var(--bg-orange)] px-4 py-[5px] hover:text-white cursor-pointer text-[15px] cursor-pointer whitespace-nowrap"
                      onClick={() => {
                        setShowCategoryDropdown(false);
                        setSelectedCategory(category.name);
                      }}
                    >
                      {category.name}
                    </li>
                  ))}
                </ul>
              </Collapse>
            </div>
          </div>

          <div className="w-[1px] h-[25px] bg-[#d3d3d3] ml-2 mr-2.5 max-[575px]:hidden" />

          <input
            type="text"
            placeholder="Search product here.."
            className="focus:outline-none text-sm xl:text-base placeholder:text-sm pr-2 flex-1 min-w-0 max-[575px]:pl-3"
          />
          <button
            type="submit"
            className="hidden min-[575px]:block capitalize bg-[var(--bg-orange)] text-white px-7 py-3 text-sm font-medium cursor-pointer shrink-0"
          >
            Search
          </button>
          <button
            type="submit"
            className="min-[575px]:hidden capitalize bg-[var(--bg-orange)] text-white px-7 py-3 text-lg font-medium cursor-pointer shrink-0"
          >
            <IoSearchOutline />
          </button>
        </form>

        <div className="text-start">
          <h2 className="mb-2 mt-4 capitalize font-medium">Popular Search Term</h2>
          <div className="flex gap-2 flex-wrap">
            <span className="border border-black/10 px-2 py-1.5 rounded-md text-sm">
              electronics
            </span>
            <span className="border border-black/10 px-2 py-1.5 rounded-md text-sm">
              electronics
            </span>
            <span className="border border-black/10 px-2 py-1.5 rounded-md text-sm">
              electronics
            </span>
            <span className="border border-black/10 px-2 py-1.5 rounded-md text-sm">
              electronics
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
