import React from "react";
import { Link } from "react-router-dom";
const BreadCumbs = ({ className }) => {
  return (
    <div className={`bg-gray-100 py-4 sm:py-6 md:py-7 rounded-md  ${className}`}>
      <div className="container mx-auto px-4 max-[450px]:px-2 sm:px-6 text-sm flex items-center flex-wrap gap-1 text-xs sm:text-sm md:text-[15px]">
        <Link to="/" className="text-gray-500 hover:text-black font-medium">
          Home
        </Link>

        <span className="mx-1 text-gray-400">/</span>

        <Link to="/books" className="text-gray-500 hover:text-black  font-medium">
          Books & Music
        </Link>

        <span className="mx-1 text-gray-400">/</span>

        <Link to="/exam" className="text-gray-500 hover:text-black  font-medium">
          Exam Central
        </Link>

        <span className="mx-1 text-gray-400">/</span>

        <span className="text-black font-medium">
          Moshi Latest Venturo Premium Laptop Backpack
        </span>
      </div>
    </div>
  );
};

export default BreadCumbs;
