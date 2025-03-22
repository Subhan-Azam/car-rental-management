'use client'
import useCarCrud from "@/hooks/useCarCrud";
import useModel from "@/hooks/useModel";
import React, { useEffect, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

interface BookingDropDownType {
  className: string;
  setSelectedCar: (carName: string | null) => void;
}
const BookingDropDown = ({
  className,
  setSelectedCar,
}: BookingDropDownType) => {
  const { cars = [] } = useCarCrud();

  const uniqueCars = [
    "All Cars",
    ...new Set(cars.map?.((car) => car?.carName)),
  ];
  const { isOpen, setIsOpen, handleIsOpen } = useModel();
  const [selectedOption, setSelectedOption] = useState<string>(
    uniqueCars.length > 1 ? uniqueCars[1] : "All Cars"
  );

  // useEffect(() => {
  //   setSelectedCar(selectedOption === "All Cars" ? null : selectedOption);
  // }, [setSelectedCar, selectedOption]);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setSelectedCar(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={handleIsOpen}
        className={`${className} bg-white h-[36px] px-5 flex items-center justify-center gap-3 rounded-[22px] cursor-pointer dark:bg-[#242731] dark:text-[#E0E4E7] transition-all duration-300`}
      >
        {selectedOption} <IoMdArrowDropdown size={25} color="#B4B4C6" />
      </button>

      {isOpen && (
        <div
          className="absolute left-0 mt-2 w-[122px] bg-white border border-gray-200 shadow-lg rounded-lg dark:bg-[#242731] dark:border-gray-700"
        >
          {uniqueCars.map((carName, index) => (
            <li
              key={index}
              className="px-4 py-2 text-sm text-gray-700 dark:text-[#E0E4E7] hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
              onClick={() => handleOptionClick(carName)}
            >
              {carName}
            </li>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookingDropDown;
