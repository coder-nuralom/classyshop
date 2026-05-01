import React, { useState } from "react";
import InputField from "./UI/InputField";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCart } from "../../features/cartSlice";
import OrderConfirmation from "../pages/OrderConfirmation";

const CheckoutForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setformData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    state: "",
    district: "",
    city: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const orderId = "ORD-" + Date.now();
    const orderDate = new Date().toLocaleString("en-BD", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
    const orderData = {
      ...formData,
      orderId,
      orderDate,
    };

    dispatch(clearCart());
    navigate("/order-confirmation", {
      state: orderData,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="grid grid-cols-1 min-[500px]:grid-cols-2 gap-x-4 gap-y-3">
        <div>
          <label
            htmlFor="first-name"
            className="mb-1 inline-block text-base font-medium text-black/90"
          >
            First Name
          </label>
          <InputField
            id={"first-name"}
            name="firstName"
            value={formData.firstName}
            handleChange={handleChange}
          />
        </div>
        <div>
          <label
            htmlFor="last-name"
            className="mb-1 inline-block text-base font-medium text-black/90"
          >
            Last Name
          </label>
          <InputField
            id={"last-name"}
            name="lastName"
            value={formData.lastName}
            handleChange={handleChange}
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="email"
          className="mb-1 inline-block text-base font-medium text-black/90"
        >
          Email
        </label>
        <InputField
          id={"email"}
          name="email"
          required={false}
          value={formData.email}
          handleChange={handleChange}
        />
      </div>
      <div>
        <label
          htmlFor="phone"
          className="mb-1 inline-block text-base font-medium text-black/90"
        >
          Phone Nubmer
        </label>
        <InputField
          id={"phone"}
          name="phone"
          value={formData.phone}
          handleChange={handleChange}
        />
      </div>
      <div className="grid grid-cols-1 min-[500px]:grid-cols-2 gap-x-4 gap-y-3">
        <div>
          <label
            htmlFor="state"
            className="mb-1 inline-block text-base font-medium text-black/90"
          >
            State / Division
          </label>
          <InputField
            id={"state"}
            name="state"
            value={formData.state}
            handleChange={handleChange}
          />
        </div>
        <div>
          <label
            htmlFor="district"
            className="mb-1 inline-block text-base font-medium text-black/90"
          >
            District
          </label>
          <InputField
            id={"district"}
            name="district"
            value={formData.district}
            handleChange={handleChange}
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="city"
          className="mb-1 inline-block text-base font-medium text-black/90"
        >
          City
        </label>
        <InputField
          id={"city"}
          name="city"
          value={formData.city}
          handleChange={handleChange}
        />
      </div>
      <div>
        <label
          htmlFor="address"
          className="mb-1 inline-block text-base font-medium text-black/90"
        >
          Address
        </label>
        <InputField
          id={"address"}
          name="address"
          value={formData.address}
          handleChange={handleChange}
        />
      </div>

      <button className="w-full mt-6 bg-[var(--bg-orange)] text-white py-3  transition cursor-pointer text-base font-medium uppercase rounded-sm">
        Place Order
      </button>
    </form>
  );
};

export default CheckoutForm;
