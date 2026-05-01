import React from "react";
import ProductCardListView from "../../components/ProductCardListView";
import { useSelector } from "react-redux";
import { LuHeartOff } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const MyLists = () => {
  const navigate = useNavigate();
  const wishListItems = useSelector((state) => state.wishlist.wishlist);
  return (
    <div className="bg-white p-5 rounded-md w-full">
      <h2 className="text-xl font-medium capitalize mb-6">My Lists</h2>

      {wishListItems.length > 0 ? (
        <div className="space-y-5">
          {wishListItems.map((item, index) => (
            <ProductCardListView product={item} key={index} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center pt-5 pb-7 sm:pb-10 px-4 text-center">
          <LuHeartOff className="w-15 h-15 sm:h-17 sm:w-17 md:h-20 md:w-20 text-gray-300 mb-6" />
          <h4 className="text-lg sm:text-2xl font-semibold text-gray-900 mb-2">
            Your wishlist is empty
          </h4>
          <p className="text-gray-500 text-sm mb-6 max-w-lg font-medium">
            Add your favorite products to wishlist and they will appear here.
          </p>
          <button
            onClick={() => navigate("/shop")}
            className="bg-[var(--bg-orange)] text-white px-8 py-2.5 sm:py-3 rounded-md font-medium transition-all duration-200 transform hover:scale-105 shadow-lg cursor-pointer"
          >
            Start Shopping
          </button>
        </div>
      )}
    </div>
  );
};

export default MyLists;
