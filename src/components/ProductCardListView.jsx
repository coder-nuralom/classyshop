import React, { useEffect, useState } from "react";
import prouduct1 from "../assets/product1.webp";
import product2 from "../assets/oval-blue-charm-bracelet-2.webp";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { IoGitCompareOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart2 } from "react-icons/bs";
import { BsDot } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
const ProductCardListView = ({ product }) => {
  if (!product) return null;
  const offerEndDate = product?.dealEnd ? new Date(product.dealEnd) : null;
  const [timeLeft, setTimeLeft] = useState(null);

  const calculateTimeLeft = () => {
    const difference = offerEndDate - new Date();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (24 * 60 * 60 * 1000)),
        hours: Math.floor((difference / (60 * 60 * 1000)) % 24),
        minute: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      return null;
    }
  };

  useEffect(() => {
    const update = () => setTimeLeft(calculateTimeLeft());

    update();

    const timer = setInterval(update, 1000);

    return () => clearInterval(timer);
  }, [product?.dealEnd]);

  return (
    <div className="shadow-sm flex items-start lg:items-center gap-7 max-[470px]:gap-5 border border-black/6 bg-white rounded-lg group p-5 max-[470px]:p-3">
      <div className="max-[510px]:h-43 max-[510px]:w-43 max-[470px]:h-35 max-[470px]:w-35 max-[360px]:w-30 h-50 w-50 md:h-70 md:w-70 overflow-hidden rounded-lg rounded-tl-lg shrink-0 relative">
        <Link to={"/product/1"}>
          <img
            src={product.thumbnail}
            alt=""
            className="rounded-tr-lg rounded-lg w-full h-full hover:scale-105 duration-300"
          />
        </Link>

        <div className="absolute top-2 left-2 flex flex-col items-start gap-y-1">
          <span className="bg-[var(--bg-discount)] text-[13px] px-2 py-0.5 font-medium text-white rounded-sm">
            -{product.discount}%
          </span>
          {product.isNew && (
            <span className="bg-[var(--bg-new)] text-[11px] px-2 py-0.5 font-medium text-white rounded-sm uppercase opacity-0 group-hover:opacity-100 duration-300">
              new
            </span>
          )}
        </div>

        <div className="absolute top-[15px] -right-[25%] opacity-0 group-hover:right-[10px] group-hover:opacity-100 duration-400 ease-in-out flex flex-col bg-white rounded-md px-1 shadow-md">
          <button className="text-xl font-normal w-6 h-8.5 flex items-center justify-center border-b border-black/13 cursor-pointer hover:text-[var(--bg-orange)] duration-200">
            <IoMdHeartEmpty />
          </button>
          <button className="text-xl font-normal w-6 h-8.5 flex items-center justify-center border-b border-black/13 cursor-pointer hover:text-[var(--bg-orange)] duration-200">
            <IoGitCompareOutline />
          </button>
          <button className="text-xl font-black w-6 h-8.5 flex items-center justify-center border-b border-black/13 cursor-pointer hover:text-[var(--bg-orange)] duration-200">
            <BsCart2 />
          </button>
        </div>

        {timeLeft && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 opacity-100 group-hover:opacity-0 duration-300 transition-all pointer-events-none">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hrs", value: timeLeft.hours },
              { label: "Min", value: timeLeft.minute },
              { label: "Sec", value: timeLeft.seconds },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center w-[42px] max-[450px]:w-[30px] h-[42px] max-[450px]:h-[35px] bg-[#fef2f2] rounded-[5px] py-[2px] px-[2px]"
              >
                <p className="text-[#da3f3f] text-sm max-[450px]:text-[12px] font-semibold">
                  {item.value}
                </p>
                <p className="text-[#da3f3f] text-[12px] max-[450px]:text-[10px] font-medium">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div>
        <h6>
          <Link className="text-[13px] text-[var(--text-gray)] font-medium hover:text-[var(--bg-orange)] duration-200 hidden min-[470px]:block">
            {product.category}
          </Link>
        </h6>
        <h3 className="text-sm max-[470px]:text-[13px] mt-1.5 font-medium text-black/90">
          <Link className="hover:text-[var(--bg-orange)] duration-200 line-clamp-2">
            {product.title}
          </Link>
        </h3>
        <div className="flex items-center gap-0.5 mt-2">
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              className={`${index < Math.floor(4) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} max-[470px]:text-[12px]`}
            />
          ))}
        </div>

        <div className="flex items-center gap-x-2 mt-1.5">
          <span className="line-through text-gray-500 text-sm font-medium">
            ${product.oldPrice.toFixed(2)}
          </span>
          <span className="text-[var(--bg-orange)] text-[16px] font-semibold">
            ${product.price.toFixed(2)}
          </span>
        </div>
        <p className="text-sm text-[var(--text-gray)] font-medium mb-2 mt-1.5 hidden min-[510px]:block">
          Availability : {product.stock} In Stock
        </p>
        <ul className="hidden md:block">
          <li className="flex items-center gap-1 text-[var(--text-gray)] text-sm font-medium">
            <BsDot className="text-2xl" />
            Certified appraisals for insurance purposes
          </li>
          <li className="flex items-center gap-1 text-[var(--text-gray)] text-sm">
            <BsDot className="text-2xl" />
            Wide selection of wedding bands and bridal jewelry
          </li>
          <li className="flex items-center gap-1 text-[var(--text-gray)] text-sm">
            <BsDot className="text-2xl" />
            Expert advice on care and preservation free
          </li>
        </ul>
        <button className="flex items-center gap-2.5 bg-[var(--bg-orange)] px-4 max-[470px]:py-2 py-2.5 text-white rounded-md mt-3 cursor-pointer capitalize text-xs sm:text-[15px] font-medium hover:bg-black transition-all duration-300">
          <FiShoppingCart className="text-base max-[360px]:hidden" />
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCardListView;
