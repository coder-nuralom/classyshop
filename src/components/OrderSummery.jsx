import React, { useState } from "react";
import { GoPackage } from "react-icons/go";
import productImg from "../assets/oval-blue-charm-bracelet-2.webp";
import { useSelector, useDispatch } from "react-redux";

const OrderSummery = () => {
  const cartItems = useSelector((state) => state.cart.cart);

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const [tax, setTax] = useState(0);
  const [shipping, setshipping] = useState(100);
  const total = subtotal + tax + shipping;

  return (
    <div className="bg-white py-7 px-6 border border-black/10 shadow-sm rounded-md">
      <h2 className="text-[22px] font-medium flex items-center gap-2 pb-3 border-b border-black/10">
        <GoPackage className="text-3xl text-[var(--bg-orange)]" />
        Order Summery
      </h2>

      <div className="flex items-center justify-between py-3 border-b border-black/10 mb-5">
        <span className="text-base font-medium text-black/90">Product</span>
        <span className="text-base font-medium text-black/90">Subtotal</span>
      </div>

      <div className="all_products space-y-3 h-fit max-h-60 overflow-y-auto">
        {cartItems.map((item, index) => (
          <div
            key={index}
            className="single_product flex items-center justify-between w-[98%] pr-1"
          >
            <div className="flex items-center gap-2 w-[70%]">
              <div className="w-[50px] h-[50px] overflow-hidden object-cover rounded-md shrink-0">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full rounded-sm"
                />
              </div>
              <div>
                <h2 className="capitalize line-clamp-1 text-[15px] font-medium">
                  {item.title}
                </h2>
                <span className="text-sm font-medium">Qty: {item.quantity}</span>
              </div>
            </div>
            <span className="text-base font-medium">${item.quantity * item.price}</span>
          </div>
        ))}
      </div>

      <div className="border-t border-black/10 mt-5 pt-3 space-y-1">
        <div className="subtotal flex flex-wrap items-center justify-between text-xl">
          <span className="text-[var(--text-gray)] font-medium text-[17px]">Subtotal:</span>
          <span className="font-semibold text-[var(--bg-orange)] text-lg">${subtotal}</span>
        </div>
        <div className="shipping flex flex-wrap  items-center justify-between text-xl">
          <span className="capitalize text-[var(--text-gray)] font-medium text-[17px]">
            Shipping (Express):
          </span>
          <span className="font-semibold capitalize text-[var(--bg-orange)] text-lg">
            ${shipping}
          </span>
        </div>
        <div className="shipping flex flex-wrap items-center justify-between text-xl">
          <span className="capitalize text-[var(--text-gray)] font-medium text-[17px]">
            Taxes:
          </span>
          <span className="font-semibold capitalize text-[var(--bg-orange)] text-lg">
            ${tax}
          </span>
        </div>
      </div>

      <div className="total flex flex-wrap  justify-between border-t border-black/10 pt-4 mt-3">
        <span className="text-xl max-[401px]:text-lg font-semibold text-black">
          Estimated Total:
        </span>
        <span className="text-[21px] font-semibold text-[var(--bg-orange)] max-[401px]:text-lg">
          ${total}
        </span>
      </div>
    </div>
  );
};

export default OrderSummery;
