import React from "react";
import { RiShoppingBag4Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { GoCreditCard } from "react-icons/go";
import DrawerCartItem from "./DrawerCartItem";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../../features/cartSlice";
import { useNavigate } from "react-router-dom";

const CartDrawer = () => {
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  return (
    <div
      onClick={() => dispatch(toggleCart())}
      className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-90 transition-opacity duration-300 ${isCartOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`fixed top-0 right-0 z-100 h-full w-[92%] sm:w-md bg-white shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out  ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Cart Header */}
        <div className="flex items-center justify-between  px-4 py-5 bg-gray-50 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 flex items-center space-x-2">
            <RiShoppingBag4Line className="text-[var(--bg-orange)] text-2xl" />
            <span>Shopping Cart</span>
          </h2>
          <button
            onClick={() => dispatch(toggleCart())}
            className="p-2 hover:bg-[var(--bg-orange)]/30 rounded-full transition-colors duration-200 cursor-pointer"
          >
            <RxCross2 className="h-6 w-6" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 px-4 py-6 overflow-y-auto">
          <div className="all_items space-y-3">
            {[...Array(10)].map((_, index) => (
              <DrawerCartItem key={index} />
            ))}
          </div>
        </div>

        {/* Cart Footer */}
        <div className="px-4 py-5 border-t border-gray-200 bg-gray-50">
          <div className=" border-b border-black/15 pb-3 space-y-1.5">
            <div className="flex justify-between items-center">
              <span className="text-base font-medium text-gray-900">Sub Total</span>
              <span className="text-base font-semibold text-[var(--bg-orange)]">10000$</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-base font-medium text-gray-900">Shipping</span>
              <span className="text-base font-semibold text-[var(--bg-orange)]">100$</span>
            </div>
          </div>

          <div className="mt-2 mb-8">
            <div className="flex justify-between items-center">
              <span className="text-base font-medium text-gray-900 capitalize">total</span>
              <span className="text-base font-semibold text-[var(--bg-orange)]">10100$</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                navigate("/checkout");
                dispatch(toggleCart());
              }}
              className="w-full bg-[var(--bg-orange)] px-3 text-white py-2.5 rounded-lg font-medium flex items-center justify-center space-x-2 cursor-pointer"
            >
              <GoCreditCard className="w-5" />
              <span>Checkout</span>
            </button>
            <button
              onClick={() => {
                navigate("/cart");
                dispatch(toggleCart());
              }}
              className="w-full bg-[var(--bg-orange)] px-3 text-white py-2.5 rounded-lg font-medium flex items-center justify-center cursor-pointer"
            >
              View Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
