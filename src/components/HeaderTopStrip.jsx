import React from "react";
import { Link } from "react-router-dom";

const HeaderTopStrip = () => {
  return (
    <div className="top_strip py-2 border-y border-black/10 hidden md:block">
      <div className="container mx-auto px-4 max-[450px]:px-2 sm:px-6">
        <div className="flex items-center justify-between">
          <div className="col_1">
            <p className="text-sm font-medium text-[var(--text-gray)]">
              Get up to 50% off new season styles, limited time only.
            </p>
          </div>
          <div className="col_2">
            <ul className="flex items-center justify-end">
              <li className="mr-4 pr-4 border-r border-[#e5e5e5] ">
                <Link
                  to={"/help-center"}
                  className="text-sm text-[var(--text-gray)] hover:text-[var(--bg-orange)]  font-medium duration-300"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  to={"/order-tracking"}
                  className="text-sm text-[var(--text-gray)] hover:text-[var(--bg-orange)] font-medium duration-300"
                >
                  Order Tracking
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTopStrip;
