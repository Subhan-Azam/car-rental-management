import React from "react";
import { IoIosArrowDown } from "react-icons/io";

interface FilterBtnPropsTypes {
  heading?: string;
}

const FilterBtn: React.FC<FilterBtnPropsTypes> = ({ heading }) => {
  return (
    <div className="flex items-center gap-x-2 rounded-lg dark:bg-[#242731] bg-white px-3 py-[10px] ">
      <h3 className="dark:text-[#E0E4E7] text-[#5F6165] leading-[20.83px]  font-medium ">
        {heading}
      </h3>
      <IoIosArrowDown className="dark:text-[#7C7C8D] text-[#5F6165] w-6 h-6" />
    </div>
  );
};

export default FilterBtn;
