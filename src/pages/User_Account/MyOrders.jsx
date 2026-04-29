import React from "react";
import ProductCardListView from "../../components/ProductCardListView";

const MyOrders = () => {
  return (
    <div className="p-5 rounded-md w-full bg-white">
      <h1 className="text-xl font-medium mb-6">My Orders</h1>
      <div className="space-y-6">
        {/* Order Card */}
        {[...Array(5)].map((_, index) => (
          <div key={index} className="bg-gray-50 rounded-xl shadow-sm p-6 space-y-4">
            {/* Order Header */}
            <div className="flex justify-between items-center border-b border-black/10 pb-3">
              <div>
                <p className="font-semibold mb-1">Order ID: ORD-10234</p>
                <p className="text-sm text-gray-500 font-medium">10 Oct 2022</p>
              </div>

              <div className="text-right">
                <p className="font-semibold mb-1">$320</p>
                <span className="text-sm px-2 py-1 rounded bg-green-100 text-green-700 font-medium">
                  Delivered
                </span>
              </div>
            </div>

            {/* Products List */}
            <div className="space-y-3 max-h-48 overflow-y-auto ordered_products">
              {[...Array(1)].map((_, index) => (
                <div key={index} className="flex items-center gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=200"
                    className="w-14 h-14 rounded object-cover"
                  />
                  <div className="flex-1">
                    <p className="text-[15px] font-medium">Nike Air Max 270</p>
                    <p className="text-[13px] text-gray-500 font-medium">Qty: 1</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center pt-2">
              <span className="text-sm font-medium px-2 py-1 rounded bg-green-100 text-green-700">
                Paid
              </span>

              <button className="px-4 py-2 text-sm bg-[var(--bg-orange)] text-white rounded-md hover:bg-gray-800 transition font-medium cursor-pointer">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
