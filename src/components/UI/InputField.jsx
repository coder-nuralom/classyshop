import React from "react";

const InputField = ({ type, placeholder, name, handleChange, id, required = true }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      required={required}
      id={id}
      className="w-full px-2 py-2.5 border border-gray-500/30 rounded outline-none focus:border-black text-[15px]"
    />
  );
};

export default InputField;
