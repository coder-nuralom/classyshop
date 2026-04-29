import React, { useEffect, useRef, useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { MdOutlineRocketLaunch } from "react-icons/md";
import Button from "@mui/material/Button";
import { Link, NavLink } from "react-router-dom";
import navbarMenuItems from "../../Data/navbarMenuData";
import { Collapse } from "react-collapse";
import { IoIosArrowDown } from "react-icons/io";
import categoryData from "../../Data/categoryData";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    const handleClickOutside = (event) => {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        setShowDropDownCategoryMenu(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const dropDownRef = useRef(null);
  const [showDropDownCategoryMenu, setShowDropDownCategoryMenu] = useState(false);
  const [openIds, setOpenIds] = useState([]);

  const toggleCategroy = (id) => {
    setOpenIds((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));
  };

  // recursive categroy renderer

  const renderCategories = (items, level = 0) => {
    return items.map((item) => {
      const isOpen = openIds.includes(item._id);
      const hasChildren = item.children && item.children.length > 0;

      return (
        <div key={item._id} className="bg-gray-100 px-3">
          <div
            onClick={() => toggleCategroy(item._id)}
            className="flex items-center justify-between cursor-pointer py-2"
          >
            <span className="whitespace-nowrap">{item.name}</span>
            {hasChildren && (
              <IoIosArrowDown
                className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
              />
            )}
          </div>

          {hasChildren && (
            <Collapse isOpened={isOpen}>
              <div className="pl-3 border-l border-gray-300">
                {renderCategories(item.children, level + 1)}
              </div>
            </Collapse>
          )}
        </div>
      );
    });
  };

  return (
    <div
      className={`py-2 sticky top-0 z-10 bg-white ${isSticky ? "shadow-md" : ""} hidden lg:block`}
    >
      <div className="container mx-auto px-4 max-[450px]:px-2 sm:px-6 flex items-center">
        <div className="col_1 w-auto shrink-0 relative" ref={dropDownRef}>
          <Button
            onClick={() => setShowDropDownCategoryMenu((prev) => !prev)}
            className="!text-black gap-2.5 !text-[15px] !font-medium !pl-0 !pr-3 xl:!pr-5 w-full !justify-start !items-center"
          >
            <RiMenu2Fill className="!text-lg" />
            Shop By Categories
          </Button>

          <div className="absolute top-full left-0">
            <Collapse isOpened={showDropDownCategoryMenu}>
              <div className="bg-white shadow-sm border border-black/10 rounded-sm h-120 space-y-1 w-fit overflow-y-auto mt-2 dropMenu_scrollbar pr-1.5">
                {renderCategories(categoryData)}
              </div>
            </Collapse>
          </div>
        </div>
        <div className="w-[1px] h-[25px] bg-[#d3d3d3] ml-4 mr-6" />

        <div className="col_2 flex-1">
          <ul className="flex items-center gap-x-1 xl:gap-x-3">
            {navbarMenuItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <li key={index}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `flex items-center ${item.icon && "gap-x-2"} text-black capitalize font-medium hover:text-[var(--bg-orange)] px-2 py-2 rounded-sm hover:bg-gray-100 ${isActive ? "text-red-600 bg-gray-100" : ""}`
                    }
                  >
                    {item.name}
                    <img src={item.icon} alt={item.iconAlt} className={`${item.iconClass}`} />
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="hidden xl:block xl:col_3 w-[18%]">
          <Link
            to={"/flash-sale"}
            className="flex items-center justify-end gap-x-3 font-medium"
          >
            <MdOutlineRocketLaunch className="text-[28px] text-[var(--bg-orange)] font-black" />
            Deals Ending Soon!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
