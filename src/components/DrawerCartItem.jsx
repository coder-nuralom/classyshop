import React from "react";
import img from "../assets/oval-blue-charm-bracelet-2.webp";
import { HiMinus } from "react-icons/hi";
import { HiPlus } from "react-icons/hi";
import { FaRegTrashAlt } from "react-icons/fa";
const DrawerCartItem = () => {
  return (
    <div className="flex items-center space-x-3 bg-gray-50 rounded-lg">
      <div className="max-[400px]:flex-1 shrink-0">
        <img
          src={img}
          alt={`item_image`}
          className="w-16 h-16 object-cover rounded-lg shrink-0"
        />
      </div>
      <div className="flex-1 min-w-0 max-[400px]:hidden">
        <h4 className="font-medium text-gray-900 truncate">
          MVMT Chrono Analog Black Dial Men Watch
        </h4>
        <p className="text-sm font-medium">{100}$</p>
      </div>

      <div className="flex items-center space-x-1 max-[400px]:flex-1 pl-2">
        <button
          className={`p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-200 cursor-pointer`}
        >
          <HiMinus className="w-4 h-4" />
        </button>
        <span className="w-8 text-center font-medium">{12}</span>
        <button className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-200 cursor-pointer">
          <HiPlus className="w-4 h-4" />
        </button>
      </div>

      <div className="flex items-center space-x-2 min-w-[105px] justify-end">
        <span className="font-semibold text-gray-900 text-center w-[80px] pt-1">${100.0}</span>

        <button className="p-1 text-red-500 rounded-full hover:bg-red-50 transition-colors duration-200 cursor-pointer">
          <FaRegTrashAlt className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default DrawerCartItem;
