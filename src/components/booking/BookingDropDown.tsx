import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";

interface BookingDropDownType {
  title: string;
  className: string;
}
const BookingDropDown = ({ title, className }: BookingDropDownType) => {
  return (
    <>
      <div
        className={`${className} bg-white w-[122px] h-[36px] flex items-center justify-center gap-3 rounded-[22px] cursor-pointer dark:bg-[#242731] dark:text-[#E0E4E7] transition-all duration-300`}
      >
        {title} <IoMdArrowDropdown size={25} color="#B4B4C6" />
      </div>
    </>
  );
};

export default BookingDropDown;
