import React from "react";
import img from "../assets/oval-blue-charm-bracelet-2.webp";
import { HiMinus } from "react-icons/hi";
import { HiPlus } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../../features/cartSlice";
import { useNavigate } from "react-router-dom";

const CartItem = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleQty = (newQty) => {
    dispatch(updateQuantity({ id: product.id, quantity: newQty }));
  };
  return (
    <div className="border border-black/10 p-3 sm:p-4 rounded-xl transition duration-300 flex flex-col min-[785px]:flex-row min-[1024px]:flex-col min-[1150px]:flex-row items-center justify-between shadow-sm space-y-3">
      <div className="image_area w-full flex items-center max-[375px]:items-start gap-4">
        <img
          onClick={() => navigate(`/product/${product.id}`)}
          src={product.thumbnail}
          alt={"Product Image"}
          className="w-25 h-25 max-[375px]:w-23 max-[375px]:h-23 object-cover object-center rounded-lg border-2 border-gray-700 flex-shrink-0 cursor-pointer"
        />
        <div>
          <h3
            onClick={() => navigate(`/product/${product.id}`)}
            className="text-sm sm:text-[15px] font-medium mb-1 cursor-pointer"
          >
            {product.title}
          </h3>
          <p className="text-sm sm:text-[15px] text-[var(--bg-orange)] font-semibold tracking-wide mb-1">
            ${product.price.toFixed(2)}
          </p>

          <div>
            <span className="capitalize font-medium text-sm sm:text-[15px]">size: </span>
            <span className="capitalize font-medium text-sm sm:text-[15px]">M</span>
          </div>
        </div>
      </div>

      <div className="info_area flex items-center justify-between min-[785px]:justify-end min-[1024px]:justify-between min-[1150px]:justify-end space-x-4 w-full">
        <div className="border border-black/10 rounded-full flex-items-center overflow-hidden">
          <button
            onClick={() => handleQty(product.quantity - 1)}
            className="text-gray-400 p-2 hover:bg-gray-700 transition duration-300 inline-flex items-center justify-center"
          >
            <HiMinus className="max-[375px]:text-xs" />
          </button>
          <span className="p-2 text-[var(--text-gray)] text-base max-[375px]:text-xs  font-medium">
            {product.quantity}
          </span>
          <button
            onClick={() => handleQty(product.quantity + 1)}
            className="text-gray-400 p-2 hover:bg-gray-700 transition duration-300 inline-flex items-center justify-center"
          >
            <HiPlus className="max-[375px]:text-xs" />
          </button>
        </div>
        <p className="font-semibold text-base max-[375px]:text-sm text-[var(--bg-orange)] w-26 max-[375px]:w-auto text-center">
          ${product.quantity * product.price}
        </p>
        <button
          onClick={() => dispatch(removeFromCart(product.id))}
          className="p-3 max-[450px]:p-2 bg-black/80 rounded-full hover:bg-[var(--bg-orange)]/70 transition duration-300 text-white cursor-pointer"
        >
          <RxCross2 />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
