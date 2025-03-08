import Image from "next/image";
import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { LuUserRound } from "react-icons/lu";

const BookingCard = () => {
  return (
    <>
      <div className="max-w-[325px] w-full h-[267px] bg-white rounded-[16px] p-[24px] flex flex-col justify-between dark:bg-[#242731]">
        <div>
          <div className="flex items-center justify-between">
            <h2 className="font-[700] text-[18px] dark:text-white">
              Porshe 718 Cayman S
            </h2>
            <FaRegHeart className="text-[#A4A5A6] w-[20px]" />
          </div>
          <p className="text-[#72767C] text-[16px]">Coupe</p>
        </div>

        <div className="flex justify-center">
          <Image
            src={"/assets/booking-car.png"}
            alt="booking-car"
            className="w-[233px]"
            width={300}
            height={300}
          />
        </div>

        <div className="flex items-center justify-between text-[#72767C]">
          <div className="flex gap-3 dark:text-white">
            <div className="flex items-center gap-1 text-[16px]">
              <LuUserRound color="#A162F7" />
              <span>4</span>
            </div>

            <div className="flex items-center gap-1 text-[16px]">
              <LuUserRound color="#A162F7" />
              <span>Manual</span>
            </div>
          </div>

          <div className="text-[18px]">
            <span className="text-black font-[500] dark:text-white">$400</span>
            /d
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingCard;
