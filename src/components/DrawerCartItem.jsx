import React from "react";
import img from "../assets/oval-blue-charm-bracelet-2.webp";
import { HiMinus } from "react-icons/hi";
import { HiPlus } from "react-icons/hi";
import { FaRegTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeFromCart, toggleCart, updateQuantity } from "../../features/cartSlice";
import { useNavigate } from "react-router-dom";

const DrawerCartItem = ({ singleItem }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleQty = (newQty) => {
    dispatch(updateQuantity({ id: singleItem.id, quantity: newQty }));
  };
  return (
    <div className="flex items-center space-x-3 bg-gray-50 rounded-lg">
      <div className="max-[400px]:flex-1 shrink-0">
        <img
          onClick={() => {
            navigate(`/product/${singleItem.id}`);
            dispatch(toggleCart());
          }}
          src={singleItem.thumbnail}
          alt={`item_image`}
          className="w-16 h-16 object-cover rounded-lg shrink-0 cursoir-pointer"
        />
      </div>
      <div className="flex-1 min-w-0 max-[400px]:hidden">
        <h4
          onClick={() => {
            navigate(`/product/${singleItem.id}`);
            dispatch(toggleCart());
          }}
          className="font-medium text-gray-900 truncate cursor-pointer"
        >
          {singleItem.title}
        </h4>
        <p className="text-sm font-medium">{singleItem.price}$</p>
      </div>

      <div className="flex items-center space-x-1 max-[400px]:flex-1 pl-2">
        <button
          onClick={() => handleQty(singleItem.quantity - 1)}
          disabled={singleItem.quantity === 1}
          className={`p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-200 cursor-pointer ${singleItem.quantity === 1 ? "opacity-30" : "opacity-100"}`}
        >
          <HiMinus className="w-4 h-4" />
        </button>
        <span className="w-8 text-center font-medium">{singleItem.quantity}</span>
        <button
          onClick={() => handleQty(singleItem.quantity + 1)}
          className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-200 cursor-pointer"
        >
          <HiPlus className="w-4 h-4" />
        </button>
      </div>

      <div className="flex items-center space-x-2 min-w-[105px] justify-end">
        <span className="font-semibold text-gray-900 text-center w-[80px] pt-1">
          ${singleItem.quantity * singleItem.price}
        </span>

        <button
          onClick={() => dispatch(removeFromCart(singleItem.id))}
          className="p-1 text-red-500 rounded-full hover:bg-red-50 transition-colors duration-200 cursor-pointer"
        >
          <FaRegTrashAlt className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default DrawerCartItem;
