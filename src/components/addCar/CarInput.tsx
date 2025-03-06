import React from "react";

interface CarInputProps {
  type: string;
  title: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const CarInput = ({
  type,
  title,
  placeholder,
  value,
  onChange,
}: CarInputProps) => {
  return (
    <div className="w-full">
      <label className="block text-[#7C7C8D] font-[500] mb-2">{title}</label>
      <input
        value={value}
        onChange={onChange}
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
