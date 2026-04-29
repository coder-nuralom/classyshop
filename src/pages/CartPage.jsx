import React from "react";
import SectionWrapper from "../components/SectionWrapper";
import BreadCumbs from "../components/BreadCumbs";
import ProductsSlider from "../components/ProductsSlider";
import CartSummery from "../components/CartSummery";
import CartItem from "../components/CartItem";

const CartPage = () => {
  return (
    <>
      <SectionWrapper className="mb-15 bg-gray-50 py-12.5">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-7 xl:gap-10">
          {/* Left Side */}
          <div className="col-span-1 lg:col-span-2 shadow-sm rounded-md">
            <div className="border border-black/10 px-3 sm:px-6 py-4 rounded-t-md">
              <h2 className="text-[22px] max-[350px]:text-xl font-semibold">
                Shopping Cart <span className="text-base max-[350px]:text-sm">(16 items)</span>
              </h2>
            </div>
            <div className="border space-y-4 border-black/10 px-3 sm:px-6 py-6 rounded-b-md border-t-0">
              {[...Array(3)].map((_, index) => (
                <CartItem key={index} />
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="col-span-1">
            <CartSummery subtotal={1000} shipping={30} tax={0} total={25000} />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="mb-12.5">
        <ProductsSlider title={"Popular Products"} />
      </SectionWrapper>
    </>
  );
};

export default CartPage;
