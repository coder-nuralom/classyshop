// import React from "react";
// import SectionWrapper from "../components/SectionWrapper";
// import { FiCheckCircle } from "react-icons/fi";
// import { useLocation, useNavigate } from "react-router-dom";

// const OrderConfirmation = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const data = location.state;
//   const { firstName, lastName, email, phone, state, district, city, address } = data;
//   return (
//     <SectionWrapper className="my-12.5">
//       <div className="w-full max-w-lg mx-auto shadow-sm border border-black/10 py-15 px-4 rounded-md flex flex-col items-center">
//         <FiCheckCircle className="text-6xl text-green-700" />
//         <h4 className="mt-5 text-3xl font-medium">Order Confirmed</h4>

//         <div className="bg-gray-100 py-3 px-3 my-3">
//           <h5>
//             {firstName} {lastName}
//           </h5>
//           {email && <p>{email}</p>}
//           <p>{phone}</p>
//           <p>
//             {state}, {district}, {city}
//           </p>
//           <p>{address}</p>
//         </div>
//         <button
//           onClick={() => navigate("/shop")}
//           className="text-sm sm:text-base lg:text-sm flex items-center justify-center w-full max-w-xs bg-[var(--bg-orange)] hover:bg-black rounded-lg py-3 mt-8 uppercase font-semibold space-x-3 lg:space-x-2 xl:space-x-3 shadow-sm shadow-[var(--bg-orange)]/80 transition duration-300 cursor-pointer text-white"
//         >
//           Continue Shopping
//         </button>
//       </div>
//     </SectionWrapper>
//   );
// };

// export default OrderConfirmation;

import React from "react";
import SectionWrapper from "../components/SectionWrapper";
import { FiCheckCircle, FiMapPin, FiMail, FiPhone, FiShoppingBag } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const OrderConfirmation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;
  const {
    firstName,
    lastName,
    email,
    phone,
    state,
    district,
    city,
    address,
    orderId,
    orderDate,
  } = data;

  return (
    <SectionWrapper className="bg-gradient-to-br from-orange-50 to-pink-50 py-12.5">
      <div className="text-center mb-6">
        <div className="w-20 h-20 max-[450px]:w-17 max-[450px]:h-17 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-5 max-[450px]:mb-2.5 shadow-2xl border-8 border-white">
          <FiCheckCircle className="text-3xl text-white drop-shadow-lg" />
        </div>
        <h1 className="text-[26px] max-[450px]:text-[22px] font-bold bg-gradient-to-r from-[var(--bg-orange)]/90 to-[var(--bg-orange)]/100 bg-clip-text text-transparent mb-1">
          Order Confirmed!
        </h1>
        <p className="text-base max-[450px]:text-sm text-gray-600 font-medium">
          Thank you for your purchase. Your order has been successfully placed.
        </p>
      </div>
      <div className="w-full max-w-4xl mx-auto">
        {/* Header */}

        {/* Order Summary Card */}
        <div className="bg-white/80 backdrop-blur-xl shadow-lg border border-white/50 rounded-3xl p-4 sm:p-8  mb-8">
          <div className="flex items-start space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-[var(--bg-orange)]/90 to-[var(--bg-orange)]/100 rounded-2xl flex items-center justify-center">
              <FiShoppingBag className="text-white text-xl" />
            </div>
            <div>
              <h3 className="text-xl max-[450px]:text-lg font-semibold text-gray-800 ">
                Order Details
              </h3>
              <p className="text-sm text-gray-500 font-medium">Order #{orderId}</p>
              <p className="text-sm text-gray-500 font-medium">Placed on {orderDate}</p>
            </div>
          </div>

          {/* Customer Info */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="p-4 bg-gradient-to-r from-orange-50 to-pink-50 rounded-2xl border-l-4 border-orange-500 space-y-1">
              <div className="flex items-center space-x-2">
                <FaRegUserCircle className="text-orange-500 h-4.5 w-4.5" />
                <h4 className="font-semibold text-gray-800 text-lg max-[450px]:text-base capitalize">
                  {firstName} {lastName}
                </h4>
              </div>
              {email && (
                <div className="flex items-center space-x-2 text-gray-600">
                  <FiMail className="text-orange-500 h-4.5 w-4.5" />
                  <span className="font-normal max-[450px]:text-sm">{email}</span>
                </div>
              )}
              <div className="flex items-center space-x-2 text-gray-600">
                <FiPhone className="text-orange-500 h-4.5 w-4.5" />
                <span className="font-normal max-[450px]:text-sm">{phone}</span>
              </div>
            </div>

            {/* Address */}
            <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border-l-4 border-blue-500">
              <div className="flex items-start space-x-3 mb-2">
                <FiMapPin className="text-2xl text-blue-500 mt-1 flex-shrink-0" />
                <h4 className="font-semibold text-gray-800 text-lg max-[450px]:text-base">
                  Delivery Address
                </h4>
              </div>
              <div className="space-y-1 text-gray-700">
                <p className="font-normal max-[450px]:text-sm">{address}</p>
                <p className="font-normal max-[450px]:text-sm">
                  {city}, {district}, {state}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col min-[575px]:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => navigate("/shop")}
            className="group w-full flex-1 bg-[var(--bg-orange)] hover:bg-[var(--bg-orange)] text-white font-semibold py-3 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-3 text-lg max-[450px]:text-base cursor-pointer"
          >
            <FiShoppingBag className="group-hover:scale-110 transition-transform" />
            <span>Continue Shopping</span>
          </button>
          <button
            onClick={() => navigate("/my-account/orders")}
            className="group w-full flex-1 bg-white/80 hover:bg-white border-2 border-[var(--bg-orange)] text-[var(--bg-orange)] hover:text-orange-700 font-semibold py-3 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-3 text-lg backdrop-blur-sm max-[450px]:text-base cursor-pointer"
          >
            <FiCheckCircle className="text-[var(--bg-orange)] group-hover:scale-110 transition-transform" />
            <span>View Orders</span>
          </button>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default OrderConfirmation;
