import React, { useState } from "react";
import SectionWrapper from "../components/SectionWrapper";
import BreadCumbs from "../components/BreadCumbs";
import ProductsSlider from "../components/ProductsSlider";
import CartSummery from "../components/CartSummery";
import CartItem from "../components/CartItem";
import products from "../../Data/productsData";
import { useSelector } from "react-redux";
import { FiShoppingBag } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cart);

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const [tax, setTax] = useState(0);
  const [shipping, setshipping] = useState(100);
  const total = subtotal + tax + shipping;

  const filteredPopularProducts = products.filter((item) => item.rating === 5);
  return (
    <>
      <SectionWrapper className="mb-15 bg-gray-50 py-12.5">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-7 xl:gap-10 items-start">
          {/* Left Side */}
          <div className="col-span-1 lg:col-span-2 shadow-sm rounded-md">
            <div className="border border-black/10 px-3 sm:px-6 py-4 rounded-t-md">
              <h2 className="text-[22px] max-[350px]:text-xl font-semibold">
                Shopping Cart{" "}
                <span className="text-base max-[350px]:text-sm">
                  ({cartItems.length} items)
                </span>
              </h2>
            </div>

            {cartItems.length > 0 ? (
              <div className="border space-y-4 border-black/10 px-3 sm:px-6 py-6 rounded-b-md border-t-0">
                {cartItems?.map((item, index) => (
                  <CartItem key={index} product={item} />
                ))}
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center py-15 px-4">
                <FiShoppingBag className="text-6xl" />
                <p className="text-lg my-2 mt-5 font-medium">Your cart is empty now</p>
                <span className="text-sm">Add some products to get started</span>
                <button
                  onClick={() => navigate("/shop")}
                  className="text-sm sm:text-base lg:text-sm flex items-center justify-center w-full max-w-xs bg-[var(--bg-orange)] hover:bg-black rounded-lg py-3 mt-8 uppercase font-semibold space-x-3 lg:space-x-2 xl:space-x-3 shadow-sm shadow-[var(--bg-orange)]/80 transition duration-300 cursor-pointer text-white cursor-pointer"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </div>

          {/* Right Side */}
          <div className="col-span-1">
            <CartSummery subtotal={subtotal} shipping={shipping} tax={tax} total={total} />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="mb-12.5">
        <ProductsSlider title={"Popular Products"} products={filteredPopularProducts} />
      </SectionWrapper>
    </>
  );
};

export default CartPage;
