"use client";
import React, { useState } from "react";
import { IoCheckmark } from "react-icons/io5";
import { GoGraph } from "react-icons/go";

interface AvailableSensorsCardPropsTypes {
  para?: string;
  unit?: string;
}

const AvailableSensorsCard: React.FC<AvailableSensorsCardPropsTypes> = ({
  para,
  unit,
}) => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex items-center space-x-2">
      <label className="flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
          className="hidden peer"
        />
        <div
          className={`w-[18px] h-[18px] rounded-[3px] border-[1px] border-[#A4A5A6] flex items-center justify-center transition-all duration-300 
          ${checked ? "bg-[#FF6370] border-none" : "bg-white border-gray-400"}`}
        >
          {checked && <IoCheckmark className="text-white" />}
        </div>
      </label>

      <h1
        className={` dark:text-white text-[13px] font-medium leading-[16.93px]  transition-colors duration-300 ${
          checked ? "dark:text-[#D43B3B] text-[#D43B3B]" : "text-[#242731]"
        }`}
      >
        Asset - {para}
        <span
          className={`${
            checked ? "dark:text-[#D43B3B] text-[#D43B3B]" : "text-[#A4A5A6] "
          }`}
        >
          ({unit})
        </span>
      </h1>

      <GoGraph
        className={`w-5 h-5 transition-colors duration-300 ${
          checked ? "text-[#D43B3B]" : "text-[#A4A5A6] "
        }`}
      />
    </div>
  );
};

export default AvailableSensorsCard;
