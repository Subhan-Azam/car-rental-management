import React from "react";

interface CarInputProps {
  type: string;
  title?: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
      <label className="block text-[#7C7C8D] font-[500] mb-2 dark:text-[#E0E4E7]">
        {title}
      </label>
      <input
        value={value}
        onChange={onChange}
        type={type}
        name="modelYear"
        placeholder={placeholder}
        className="w-full px-[22px] py-[14px] rounded-[10px] font-[500] text-[#5F6165] border outline-none focus:outline-[#A162F7] dark:bg-[#1F2128] dark:text-[#7C7C8D] dark:border-[#2C303D] transition-all duration-300"
        required
      />
    </div>
  );
};

export default CarInput;
