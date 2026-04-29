import React from "react";
import { GoZap } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const CartSummery = ({ subtotal, shipping, tax, total }) => {
  const navigate = useNavigate();
  return (
    <div className="w-full border border-black/10 bg-[#f4f4f4] h-fit px-6 py-6 rounded-md shadow-sm sticky top-30">
      <h3 className="text-2xl font-semibold mb-5 border-b border-black/10 pb-3 space-x-2">
        <span className="w-6 h-6 text-[var(--bg-orange)]">$</span>
        <span>Order Total</span>
      </h3>
      <div>
        <div className="space-y-1.5 pb-3">
          <div className="subtotal flex flex-wrap items-center justify-between text-xl">
            <span className="text-[var(--text-gray)] font-medium text-[17px]">Subtotal:</span>
            <span className="font-semibold text-[var(--bg-orange)] text-lg">₹{subtotal}</span>
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
        <div className="total flex flex-wrap  justify-between border-t border-black/10 pt-4">
          <span className="text-xl lg:text-lg xl:text-xl max-[401px]:text-lg font-semibold text-black">
            Estimated Total:
          </span>
          <span className="text-[21px] lg:text-lg xl:text-[21px] font-semibold text-[var(--bg-orange)] max-[401px]:text-lg">
            ₹{total}
          </span>
        </div>
        <button
          onClick={() => navigate("/checkout")}
          className="flex items-center justify-center w-full bg-[var(--bg-orange)] hover:bg-black rounded-lg py-3 mt-8 uppercase font-semibold space-x-3 lg:space-x-2 xl:space-x-3 shadow-sm shadow-[var(--bg-orange)]/80 transition duration-300 cursor-pointer text-white"
        >
          <GoZap className="text-xl lg:text-lg" />
          <span className="text-sm sm:text-base lg:text-sm">proceed to checkout</span>
        </button>
      </div>
    </div>
  );
};

export default CartSummery;
