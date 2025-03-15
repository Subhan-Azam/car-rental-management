import React from "react";

interface CarDropDownProps {
  title?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
}
const CarDropDown = ({ title, value, onChange, options }: CarDropDownProps) => {
  return (
    <>
      <div>
        <label className="block text-[#7C7C8D] font-[500] mb-2 dark:text-[#E0E4E7]">
          {title}
        </label>
        <select
          value={value}
          onChange={onChange}
          name="transmission"
          className="w-full px-[22px] py-[14px] font-[500] text-[#5F6165] border outline-none focus:outline-[#A162F7] dark:bg-[#1F2128] dark:text-[#7C7C8D] dark:border-[#2C303D] rounded-[10px] transition-all duration-300"
          // required
        >
          {options?.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default CarDropDown;
