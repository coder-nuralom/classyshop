import React, { useCallback, useState } from "react";
import { NavLink } from "react-router-dom";
import { Collapse } from "react-collapse";
import { IoIosArrowDown } from "react-icons/io";
import navbarMenuItems from "../../Data/navbarMenuData";
import categoryData from "../../Data/categoryData";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../features/mobileMenuSlice";
import { RxCross1 } from "react-icons/rx";

const MobileMenuDrawer = () => {
  const dispatch = useDispatch();
  const showMobileMenu = useSelector((state) => state.mobileMenu.showMobileMenu);
  const [activeTab, setActiveTab] = useState("menu");
  const [openIds, setOpenIds] = useState([]);

  const toggleCategory = (id) => {
    setOpenIds((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));
  };

  // recursive category renderer
  const renderCategories = (items, level = 0) => {
    return items.map((item) => {
      const isOpen = openIds.includes(item._id);
      const hasChildren = item.children && item.children.length > 0;

      return (
        <div key={item._id} className={`bg-gray-100 px-2`}>
          <div
            onClick={() => hasChildren && toggleCategory(item._id)}
            className="flex items-center justify-between cursor-pointer py-2 hover:bg-gray-200"
          >
            <span className="text-sm">{item.name}</span>

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
      onClick={() => dispatch(toggleMenu())}
      className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-90 transition-opacity duration-300 ${showMobileMenu ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`fixed top-0 left-0 z-[100] h-full w-[80%] min-[410px]:w-xs sm:w-sm bg-white shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out  ${showMobileMenu ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div
          onClick={() => dispatch(toggleMenu())}
          className="flex items-center justify-between py-3 bg-black text-white px-3"
        >
          <span>Close</span>
          <RxCross1 />
        </div>
        {/* Tabs */}
        <div className="flex border-b">
          <button
            onClick={() => setActiveTab("menu")}
            className={`flex-1 py-2 text-sm font-medium ${
              activeTab === "menu" ? "bg-gray-200" : ""
            }`}
          >
            Menu
          </button>

          <button
            onClick={() => setActiveTab("categories")}
            className={`flex-1 py-2 text-sm font-medium ${
              activeTab === "categories" ? "bg-gray-200" : ""
            }`}
          >
            Categories
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto flex-1">
          {/* MENU */}
          {activeTab === "menu" && (
            <ul>
              {navbarMenuItems.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.path}
                    className="block px-4 py-2 hover:bg-gray-200 text-sm"
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}

          {/* CATEGORIES */}
          {activeTab === "categories" && (
            <div className="p-2 space-y-1">{renderCategories(categoryData)}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileMenuDrawer;
