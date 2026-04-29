import React from "react";
import InputField from "./UI/InputField";

const CheckoutForm = () => {
  return (
    <form className="space-y-3">
      <div className="grid grid-cols-1 min-[500px]:grid-cols-2 gap-x-4 gap-y-3">
        <div>
          <label
            htmlFor="first-name"
            className="mb-1 inline-block text-base font-medium text-black/90"
          >
            First Name
          </label>
          <InputField id={"first-name"} />
        </div>
        <div>
          <label
            htmlFor="last-name"
            className="mb-1 inline-block text-base font-medium text-black/90"
          >
            Last Name
          </label>
          <InputField id={"last-name"} />
        </div>
      </div>
      <div>
        <label
          htmlFor="email"
          className="mb-1 inline-block text-base font-medium text-black/90"
        >
          Email
        </label>
        <InputField id={"email"} />
      </div>
      <div>
        <label
          htmlFor="phone"
          className="mb-1 inline-block text-base font-medium text-black/90"
        >
          Phone Nubmer
        </label>
        <InputField id={"phone"} />
      </div>
      <div className="grid grid-cols-1 min-[500px]:grid-cols-2 gap-x-4 gap-y-3">
        <div>
          <label
            htmlFor="state"
            className="mb-1 inline-block text-base font-medium text-black/90"
          >
            State / Division
          </label>
          <InputField id={"state"} />
        </div>
        <div>
          <label
            htmlFor="district"
            className="mb-1 inline-block text-base font-medium text-black/90"
          >
            District
          </label>
          <InputField id={"district"} />
        </div>
      </div>
      <div>
        <label
          htmlFor="city"
          className="mb-1 inline-block text-base font-medium text-black/90"
        >
          City
        </label>
        <InputField id={"city"} />
      </div>
      <div>
        <label
          htmlFor="address"
          className="mb-1 inline-block text-base font-medium text-black/90"
        >
          Address
        </label>
        <InputField id={"address"} />
      </div>

      <button className="w-full mt-6 bg-[var(--bg-orange)] text-white py-3  transition cursor-pointer text-base font-medium uppercase rounded-sm">
        Place Order
      </button>
    </form>
  );
};

export default CheckoutForm;
