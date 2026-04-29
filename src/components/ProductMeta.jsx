import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoStar } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import { BsCart2 } from "react-icons/bs";
import { IoGitCompareOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";

const ProductMeta = () => {
  const sizes = ["S", "M", "L", "XL"];
  const [seletedSize, setSeletedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };
  return (
    <div>
      <Link className="text-[var(--bg-orange)] text-sm font-medium">Fashion</Link>
      <h1 className="text-[23px] max-[370px]:text-xl text-black font-medium capitalize mt-1 mb-3">
        MVMT Chrono Analog Black Dial Men Watch
      </h1>
      <div className="flex flex-wrap items-center gap-3">
        <span className="text-[var(--text-gray)] text-sm">
          Brands: <span className="text-black/90 font-medium"> Patek Philippe,</span>
        </span>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, index) => (
              <IoStar
                key={index}
                className={`text-base ${index < 4 ? "text-gray-300 fill-[#faae08]" : "text-gray-300"}`}
              />
            ))}
          </div>
          <Link className="text-[var(--bg-orange)] text-sm font-medium">Reviews (3)</Link>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-x-5 gap-y-1 mt-4 mb-4">
        <div className="flex items-end gap-2">
          <span className="line-through text-gray-500 text-lg font-medium">$58.00</span>
          <span className="text-[var(--bg-orange)] text-xl font-semibold"> $44.00</span>
        </div>
        <span className="text-sm font-medium text-[var(--text-gray)]">
          Available in Stock: <span className="text-green-600">147 items</span>
        </span>
      </div>
      <span className="bg-green-100 text-green-500 px-3 py-1.5 rounded-full text-xs uppercase font-medium">
        In Stock
      </span>
      <p className="text-sm mt-4.5 leading-6 font-normal text-[var(--text-gray)]">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, iste! Consectetur
        quidem repellendus veritatis eos totam adipisci autem aspernatur, voluptate beatae
        ducimus esse veniam voluptatum perspiciatis impedit quis possimus.
      </p>
      <div className="flex items-center gap-3 mt-5">
        <span className="text-base text-black/90">Size:</span>
        <div className="flex items-center gap-1.5">
          {sizes.map((size, index) => (
            <button
              onClick={() => setSeletedSize(size)}
              key={index}
              className={`w-7 h-7 border rounded-sm text-sm text-[var(--text-gray)] font-medium cursor-pointer ${seletedSize === size ? "border-[var(--bg-orange)]/90" : "border-black/10"}`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-5 flex items-center gap-5">
        <div className="quantity_box w-fit flex items-center border border-gray-300 rounded-sm overflow-hidden">
          <span className="w-10 flex items-center justify-center">{quantity}</span>
          <div className="flex flex-col border-l border-gray-300">
            <button
              onClick={increment}
              className="text-sm px-1 py-[3px] border-b border-gray-300 hover:bg-gray-100 text-[var(--text-gray)]"
            >
              <FaAngleUp />
            </button>
            <button
              onClick={decrement}
              className="text-sm px-1 py-[3px] hover:bg-gray-100 text-[var(--text-gray)]"
            >
              <FaAngleDown />
            </button>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <button className="bg-[var(--bg-orange)] text-white text-base min-[901px]:text-sm lg:text-base max-[424px]:text-sm font-medium px-5 min-[901px]:px-3 lg:px-5 max-[424px]:px-3 py-[9px] rounded-sm cursor-pointer flex items-center gap-3 hover:bg-black duration-300">
            <BsCart2 className="text-xl" />
            Add To Cart
          </button>
          <button className="bg-black text-base min-[901px]:text-sm lg:text-base max-[424px]:text-sm font-medium text-white px-5 min-[901px]:px-3 lg:px-5 max-[424px]:px-3  py-[9px] rounded-sm cursor-pointer hover:bg-[var(--bg-orange)] duration-300 max-[370px]:hidden">
            Buy Now
          </button>
        </div>
      </div>
      <button className="bg-black w-full mt-4 text-base min-[901px]:text-sm lg:text-base max-[424px]:text-sm font-medium text-white px-5 min-[901px]:px-3 lg:px-5 max-[424px]:px-3 py-[9px] rounded-sm cursor-pointer hover:bg-[var(--bg-orange)] duration-300 min-[370px]:hidden">
        Buy Now
      </button>
      <div className="flex flex-wrap items-center gap-x-7 gap-y-3 mt-5">
        <button className="text-[15px] min-[901px]:text-sm lg:text-[15px] font-medium rounded-sm cursor-pointer flex items-center gap-2 hover:text-[var(--bg-orange)]">
          <IoMdHeartEmpty className="text-base" />
          Add To Wishlist
        </button>
        <button className="text-[15px] min-[901px]:text-sm lg:text-[15px] font-medium rounded-sm cursor-pointer flex items-center gap-2 hover:text-[var(--bg-orange)]">
          <IoGitCompareOutline className="text-base" />
          Add To Compare
        </button>
      </div>
    </div>
  );
};

export default ProductMeta;
