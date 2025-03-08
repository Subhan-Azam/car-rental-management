import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";

interface BookingDropDownType {
  title: string;
}
const BookingDropDown = ({ title }: BookingDropDownType) => {
  return (
    <>
      <div className="bg-white w-[122px] h-[36px] flex items-center justify-center gap-3 rounded-[22px] text-[#5F6165] cursor-pointer dark:bg-[#242731] dark:text-white">
        {title} <IoMdArrowDropdown size={25} color="#B4B4C6" />
      </div>
    </>
  );
};

export default BookingDropDown;
