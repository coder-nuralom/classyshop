// =========================
// ComparePage (Redux Version) - Redesigned
// =========================
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaTimes, FaStar } from "react-icons/fa";
import { clearCompare } from "../../features/compareSlice";
import { useNavigate } from "react-router-dom";

const ComparePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const compareItems = useSelector((state) => state.compare.compareItems);

  if (compareItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center py-20">
          <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            No products to compare
          </h2>
          <p className="text-xl text-gray-500 mb-8 max-w-md mx-auto">
            Add some products to your compare list to see them side by side
          </p>
          <button
            onClick={() => navigate("/shop")}
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-2xl font-semibold hover:from-blue-600 hover:to-blue-700 shadow-xl transform hover:-translate-y-1 transition-all duration-200"
          >
            Start Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Compare Products
            </h1>
            <p className="text-gray-600 mt-1">{compareItems.length} items selected</p>
          </div>
          <button
            onClick={() => dispatch(clearCompare())}
            className="px-6 py-2.5 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-xl hover:from-red-600 hover:to-red-700 shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
          >
            <FaTimes className="w-4 h-4" />
            Clear All
          </button>
        </div>

        {/* Comparison Table */}
        <div className="bg-white backdrop-blur-sm rounded-xl shadow-md border border-black/16 overflow-hidden">
          <div className="overflow-x-auto">
            <div className="min-w-[min(100vw,900px)]">
              {/* Header Row */}
              <div className="grid grid-cols-[minmax(200px,1fr)_repeat(4,minmax(220px,280px))] lg:grid-cols-[minmax(200px,1fr)_repeat(4,minmax(240px,1fr))] bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <div className="p-6 font-bold text-lg border-r border-white/20">Feature</div>
                {compareItems.map((item, index) => (
                  <div key={item.id} className="p-6 text-center relative group">
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-xl text-xs font-semibold text-gray-700 shadow-lg">
                      #{index + 1}
                    </div>
                    <button
                      className="absolute -top-2 -right-2 bg-red-500 text-white p-1.5 rounded-full hover:bg-red-600 shadow-lg transform hover:scale-110 transition-all duration-200 opacity-0 group-hover:opacity-100"
                      title="Remove"
                    >
                      <FaTimes className="w-3 h-3" />
                    </button>

                    <div className="space-y-3">
                      <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl mx-auto overflow-hidden shadow-lg">
                        <img
                          src={item.thumbnail || item.image}
                          alt={item.title}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="font-bold text-sm md:text-base line-clamp-2 text-gray-900 leading-tight px-2">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>

              {/* Feature Rows */}
              {[
                {
                  label: "Price",
                  value: (item) => `$${item.price}`,
                  bg: "bg-gradient-to-r from-emerald-500/10 to-emerald-600/10",
                },
                {
                  label: "Rating",
                  value: (item) => `${item.rating}/5`,
                  bg: "bg-gradient-to-r from-amber-500/10 to-amber-600/10",
                  icon: true,
                },
                {
                  label: "Category",
                  value: (item) => item.categoryId || item.category,
                  bg: "bg-gradient-to-r from-blue-500/10 to-blue-600/10",
                },
                {
                  label: "Status",
                  value: (item) => item.stock,
                  bg: "bg-gradient-to-r from-purple-500/10 to-purple-600/10",
                  status: true,
                },
                {
                  label: "Brand",
                  value: (item) => item.brand || "N/A",
                  bg: "bg-gradient-to-r from-indigo-500/10 to-indigo-600/10",
                },
              ].map(({ label, value, bg, icon, status }, index) => (
                <div
                  key={label}
                  className={`grid grid-cols-[minmax(200px,1fr)_repeat(4,minmax(220px,280px))] lg:grid-cols-[minmax(200px,1fr)_repeat(4,minmax(240px,1fr))] border-t border-gray-100 ${bg}`}
                >
                  <div className="p-6 font-semibold text-gray-800 border-r border-gray-100 bg-white/50 backdrop-blur-sm">
                    {label}
                  </div>
                  {compareItems.map((item) => {
                    let content;
                    if (status) {
                      content = item.stock ? (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                          In Stock
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-800 border border-red-200">
                          <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                          Out of Stock
                        </span>
                      );
                    } else if (icon && label === "Rating") {
                      const rating = value(item);
                      content = (
                        <div className="flex items-center justify-center gap-1">
                          <div className="flex text-amber-400">
                            {[...Array(5)].map((_, i) => (
                              <FaStar
                                key={i}
                                className={`w-4 h-4 ${i < Math.floor(rating) ? "fill-current" : "stroke-current opacity-40"}`}
                              />
                            ))}
                          </div>
                          <span className="text-sm font-semibold text-gray-900 ml-1">
                            {rating}
                          </span>
                        </div>
                      );
                    } else {
                      content = (
                        <span className="font-semibold text-lg text-gray-900">
                          {value(item)}
                        </span>
                      );
                    }

                    return (
                      <div
                        key={item.id}
                        className="p-6 text-center flex items-center justify-center h-full"
                      >
                        {content}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Summary Card */}
        {/* <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-100 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">💡 Pro Tips</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-semibold mt-0.5">→</span>
                Compare prices, ratings, and stock status
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-semibold mt-0.5">→</span>
                Hover over product images for better view
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-semibold mt-0.5">→</span>
                Use the ranking badges to quickly identify top picks
              </li>
            </ul>
          </div>
          <div className="p-8 bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-2xl border border-emerald-100 shadow-lg">
            <h3 className="text-xl font-bold text-emerald-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-emerald-600 hover:to-emerald-700 shadow-lg transform hover:-translate-y-1 transition-all duration-200">
                View All Products
              </button>
              <button className="w-full border-2 border-emerald-300 text-emerald-700 py-3 px-6 rounded-xl font-semibold hover:bg-emerald-50 hover:border-emerald-400 transition-all duration-200">
                Save Comparison
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ComparePage;
