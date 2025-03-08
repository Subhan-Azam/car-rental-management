import BookingCard from "@/components/booking/BookingCard";
import BookingDropDown from "@/components/booking/BookingDropDown";
import React from "react";
import { LuLayoutGrid } from "react-icons/lu";
import { VscSettings } from "react-icons/vsc";

const Booking = () => {
  return (
    <div>
      <h1 className="font-[700] text-[30px] mb-[30px] dark:text-white">
        Booking
      </h1>
      <div className="flex max-sm:flex-wrap  gap-3 justify-between items-center  mb-[34px]">
        <div className="flex gap-4">
          <BookingDropDown title="Now" />
          <BookingDropDown title="Toyota" />
        </div>

        <div className="flex gap-[16px]">
          <div className="w-[44px] h-[44px] rounded-full bg-white flex justify-center items-center shadow-md dark:text-white dark:bg-[#242731]">
            <LuLayoutGrid className="w-[24px]" />
          </div>
          <div className="w-[44px] h-[44px] rounded-full bg-purple-500 flex justify-center items-center text-white shadow-md">
            <VscSettings className="w-[24px]" />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-[24px]">
        <BookingCard />
        <BookingCard />
        <BookingCard />
        <BookingCard />
        <BookingCard />
        <BookingCard />
        <BookingCard />
        <BookingCard />
        <BookingCard />
      </div>
    </div>
  );
};

export default Booking;
