import Image from "next/image";
import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { LuUserRound } from "react-icons/lu";
import { RiRepeatLine } from "react-icons/ri";

interface BookingCardType {
  id: string;
  carName: string;
  carImage: string;
  price: string;
  views: number;
  engine: string;
  onClick: () => void;
}
const BookingCard = ({
  id,
  carName,
  carImage,
  price,
  views,
  engine,
  onClick,
}: BookingCardType) => {
  console.log("carImage:>>", carImage);
  console.log("ID:>>", id);

  return (
    <>
      <div
        onClick={onClick}
        className="group cursor-pointer max-w-[325px] w-full bg-white rounded-[16px] p-[24px] flex flex-col justify-between dark:bg-[#242731] transition-all duration-300 hover:shadow-md"
      >
        <>
          <div>
            <div className="flex items-center justify-between">
              <h2 className="font-[700] text-[18px] dark:text-white">
                {carName}
              </h2>
              <FaRegHeart className="text-[#A4A5A6] w-[20px]" />
            </div>
            <p className="text-[#72767C] text-[16px]">Coupe</p>
          </div>

          <div className="w-[250px] flex justify-center mx-auto my-3 overflow-hidden rounded-[16px]">
            <Image
              src={carImage}
              alt="booking-car"
              className="rounded-[16px] aspect-[3/2] group-hover:scale-110 transition-all duration-300"
              width={300}
              height={300}
            />
          </div>

          <div className="flex items-center justify-between text-[#72767C]">
            <div className="flex gap-3 dark:text-white">
              <div className="flex items-center gap-1 text-[16px]">
                <LuUserRound color="#A162F7" />
                <span>{views === null ? 0 : views}</span>
              </div>

              <div className="flex items-center gap-1 text-[16px]">
                <RiRepeatLine color="#A162F7" />

                <span>
                  {engine?.slice(0, 1).toUpperCase() +
                    engine?.slice(1).toLowerCase()}
                </span>
              </div>
            </div>

            <div className="text-[18px]">
              <span className="text-black font-[500] dark:text-white">
                Rs{price}
              </span>
              /d
            </div>
          </div>
        </>
      </div>
    </>
  );
};

export default BookingCard;
