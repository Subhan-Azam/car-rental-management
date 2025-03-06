import React from "react";

interface CarDropDownProps {
  title: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
}
const CarDropDown = ({ title, value, onChange, options }: CarDropDownProps) => {
  return (
    <>
      <div>
        <label className="block text-[#7C7C8D] font-[500] mb-2">{title}</label>
        <select
          value={value}
          onChange={onChange}
          name="transmission"
          className="w-full p-2 border rounded"
          required
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
