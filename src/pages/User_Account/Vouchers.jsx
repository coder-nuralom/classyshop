import React from "react";
import { FiCopy } from "react-icons/fi";
import { MdOutlineLocalOffer } from "react-icons/md";
import { vouchers } from "../../../Data/vouchersData";

const Vouchers = () => {
  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    // You could add a toast notification here
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-700";
      case "expired":
        return "bg-red-100 text-red-700";
      case "used":
        return "bg-gray-100 text-gray-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="p-5 rounded-md w-full bg-white">
      <div className="flex items-center gap-3 mb-6">
        <MdOutlineLocalOffer className="text-2xl text-[var(--bg-orange)]" />
        <h1 className="text-xl font-medium">My Vouchers</h1>
      </div>

      <div className="space-y-4">
        {vouchers.map((voucher) => (
          <div
            key={voucher.id}
            className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[var(--bg-orange)] rounded-full flex items-center justify-center">
                  <MdOutlineLocalOffer className="text-white text-lg" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{voucher.discount}</h3>
                  <p className="text-sm text-gray-600">{voucher.description}</p>
                </div>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                  voucher.status,
                )}`}
              >
                {voucher.status.charAt(0).toUpperCase() + voucher.status.slice(1)}
              </span>
            </div>

            <div className="bg-gray-50 rounded-lg p-3 mb-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Voucher Code</p>
                  <p className="font-mono font-semibold text-lg">{voucher.code}</p>
                </div>
                <button
                  onClick={() => copyToClipboard(voucher.code)}
                  className="flex items-center gap-2 px-3 py-2 bg-[var(--bg-orange)] text-white rounded-md hover:bg-orange-600 transition-colors text-sm font-medium"
                  disabled={voucher.status !== "active"}
                >
                  <FiCopy className="text-sm" />
                  Copy
                </button>
              </div>
            </div>

            <div className="flex justify-between text-sm text-gray-600">
              <span>Min. Purchase: {voucher.minPurchase}</span>
              <span>Expires: {new Date(voucher.expiry).toLocaleDateString()}</span>
            </div>
          </div>
        ))}
      </div>

      {vouchers.length === 0 && (
        <div className="text-center py-12">
          <MdOutlineLocalOffer className="text-6xl text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-600 mb-2">No Vouchers Available</h3>
          <p className="text-gray-500">
            You don't have any vouchers yet. Check back later for new offers!
          </p>
        </div>
      )}
    </div>
  );
};

export default Vouchers;
