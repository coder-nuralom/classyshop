import React from "react";

import { GrLocation } from "react-icons/gr";
import InputField from "../components/UI/InputField";
import BreadCumbs from "../components/BreadCumbs";
import SectionWrapper from "../components/SectionWrapper";
import OrderSummery from "../components/OrderSummery";
import CheckoutForm from "../components/CheckoutForm";

const CheckoutPage = () => {
  return (
    <SectionWrapper className="bg-gray-50 py-12.5">
      <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-5 xl:gap-10">
        <div className="w-full lg:w-[60%] xl:w-[65%] shadow-sm rounded-md bg-white p-10 pt-7 border border-black/10">
          <h2 className="text-[22px] max-[375px]:text-xl max-[330px]:text-base font-medium mb-8 flex items-center gap-2 pb-3 border-b border-black/10">
            <GrLocation className="text-2xl max-[375px]:text-xl text-[var(--bg-orange)]" />
            Shipping Address
          </h2>

          <CheckoutForm />
        </div>

        <div className="w-full lg:w-[40%] xl:w-[35%]">
          <OrderSummery />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default CheckoutPage;
