// =========================
// ComparePage (Redux Version) - Redesigned
// =========================
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaTimes, FaStar } from "react-icons/fa";
import { clearCompare, toggleCompare } from "../../features/compareSlice";
import { useNavigate } from "react-router-dom";
import SectionWrapper from "../components/SectionWrapper";

const ComparePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const compareItems = useSelector((state) => state.compare.compareItems);

  if (compareItems.length === 0) {
    return (
      <div className="">
        <div className="mx-auto text-center py-20 px-5">
          <div className="w-18 sm:w-22 h-18 sm:h-22 bg-gradient-to-r from-[var(--bg-orange)]/90 to-[var(--bg-orange)] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
            <svg
              className="w-12 h-12 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-4L4 7m8 4v10M4 7v10l8 4"
              />
            </svg>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            No products to compare
          </h2>
          <p className="text-base md:text-lg text-gray-500 mb-10">
            Add some products to your compare list to see them side by side
          </p>
          <button
            onClick={() => navigate("/shop")}
            className="bg-gradient-to-r from-[var(--bg-orange)]/90 to-[var(--bg-orange)] text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 shadow-xl transform hover:-translate-y-1 transition-all duration-200 cursor-pointer"
          >
            Start Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <SectionWrapper>
      <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-200">
        <table className="w-full min-w-[800px] border-collapse text-center">
          {/* Header Section */}
          <thead>
            <tr className="bg-gradient-to-r from-blue-600 via-purple-500 to-fuchsia-500 text-white">
              {/* Feature Title */}
              <th className="bg-[#5c4fff] p-6 text-left text-lg font-semibold w-1/4 border-r border-[#6a5fff]/50">
                Feature
              </th>

              {/* Product 1 */}
              <th className="p-6 bg-transparent w-1/4 border-l border-white/20 align-top">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-20 h-20 bg-white rounded-2xl p-2 shadow-sm flex justify-center items-center">
                    {/* Replace src with your actual image */}
                    <img
                      src="https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg"
                      alt="T-Shirt"
                      className="h-full object-contain"
                    />
                  </div>
                  <h3 className="text-sm font-medium leading-tight">
                    Women Solid Round
                    <br />
                    Neck Cotton T-Shirt
                  </h3>
                </div>
              </th>

              {/* Product 2 */}
              <th className="p-6 bg-transparent w-1/4 border-l border-white/20 align-top">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-20 h-20 bg-white rounded-2xl p-2 shadow-sm flex justify-center items-center">
                    <img
                      src="https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg"
                      alt="Ring"
                      className="h-full object-contain"
                    />
                  </div>
                  <h3 className="text-sm font-medium leading-tight">
                    Real Diamond
                    <br />
                    Jewellery Gold...
                  </h3>
                </div>
              </th>

              {/* Product 3 */}
              <th className="p-6 bg-transparent w-1/4 border-l border-white/20 align-top">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-20 h-20 bg-white rounded-2xl p-2 shadow-sm flex justify-center items-center">
                    <img
                      src="https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg"
                      alt="Glasses"
                      className="h-full object-contain"
                    />
                  </div>
                  <h3 className="text-sm font-medium leading-tight">
                    Full Rim Fashionable
                    <br />
                    Stylish Sunglasses
                  </h3>
                </div>
              </th>
            </tr>
          </thead>

          {/* Body Section */}
          <tbody className="text-gray-700">
            {/* Price Row */}
            <tr className="border-b border-white">
              <td className="bg-gray-50 p-5 text-left font-semibold">Price</td>
              <td className="bg-[#ecfdf5] p-5 font-bold text-lg border-l border-white/60">
                $19
              </td>
              <td className="bg-[#ecfdf5] p-5 font-bold text-lg border-l border-white/60">
                $299
              </td>
              <td className="bg-[#ecfdf5] p-5 font-bold text-lg border-l border-white/60">
                $45
              </td>
            </tr>

            {/* Rating Row */}
            <tr className="border-b border-white">
              <td className="bg-[#fffbeb] p-5 text-left font-semibold">Rating</td>
              <td className="bg-[#fef3c7] p-5 border-l border-white/60">
                <span className="text-yellow-400 text-lg">
                  ★★★★<span className="text-gray-300">★</span>
                </span>
                <span className="ml-1 font-semibold text-sm">4/5</span>
              </td>
              <td className="bg-[#fef3c7] p-5 border-l border-white/60">
                <span className="text-yellow-400 text-lg">★★★★★</span>
                <span className="ml-1 font-semibold text-sm">5/5</span>
              </td>
              <td className="bg-[#fef3c7] p-5 border-l border-white/60">
                <span className="text-yellow-400 text-lg">
                  ★★★★<span className="text-gray-300">★</span>
                </span>
                <span className="ml-1 font-semibold text-sm">4/5</span>
              </td>
            </tr>

            {/* Category Row */}
            <tr className="border-b border-white">
              <td className="bg-[#f8fafc] p-5 text-left font-semibold">Category</td>
              <td className="bg-[#eff6ff] p-5 font-bold border-l border-white/60">111</td>
              <td className="bg-[#eff6ff] p-5 font-bold border-l border-white/60">122</td>
              <td className="bg-[#eff6ff] p-5 font-bold border-l border-white/60">122</td>
            </tr>

            {/* Status Row */}
            <tr className="border-b border-white">
              <td className="bg-[#fdf4ff] p-5 text-left font-semibold">Status</td>
              <td className="bg-[#fae8ff] p-5 border-l border-white/60">
                <span className="inline-flex items-center gap-1.5 bg-[#dcfce7] text-[#166534] px-3 py-1 rounded-full text-xs font-bold tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#166534]"></span> In Stock
                </span>
              </td>
              <td className="bg-[#fae8ff] p-5 border-l border-white/60">
                <span className="inline-flex items-center gap-1.5 bg-[#dcfce7] text-[#166534] px-3 py-1 rounded-full text-xs font-bold tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#166534]"></span> In Stock
                </span>
              </td>
              <td className="bg-[#fae8ff] p-5 border-l border-white/60">
                <span className="inline-flex items-center gap-1.5 bg-[#dcfce7] text-[#166534] px-3 py-1 rounded-full text-xs font-bold tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#166534]"></span> In Stock
                </span>
              </td>
            </tr>

            {/* Brand Row */}
            <tr>
              <td className="bg-[#f8fafc] p-5 text-left font-semibold rounded-bl-xl">Brand</td>
              <td className="bg-[#f5f3ff] p-5 font-bold border-l border-white/60">H&M</td>
              <td className="bg-[#f5f3ff] p-5 font-bold border-l border-white/60">Kisna</td>
              <td className="bg-[#f5f3ff] p-5 font-bold border-l border-white/60 rounded-br-xl">
                Ray-Ban
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </SectionWrapper>
  );
};

export default ComparePage;
