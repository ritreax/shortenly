import React from "react";

function Input({ placeholder }) {
  return (
    <input
      placeholder={placeholder}
      className="bg-white px-3 py-[10px] outline-1  outline-custom-gray rounded-lg shadow font-semibold text-gunmetal placeholder:text-stone-gray focus:outline- w-[550px]"
    />
  );
}

export { Input };
