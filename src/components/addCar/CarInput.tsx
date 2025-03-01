import React from "react";

interface CarInputProps {
  type: string;
  title: string;
  placeholder: string;
}
const CarInput = ({ type, title, placeholder }: CarInputProps) => {
  return (
    <div className="w-full">
      <label className="block text-[#7C7C8D] font-[500] mb-2">{title}</label>
      <input
        type={type}
        name="modelYear"
        placeholder={placeholder}
        className="w-full p-2 border rounded focus:outline-[#A162F7]"
        required
      />
    </div>
  );
};

export default CarInput;
