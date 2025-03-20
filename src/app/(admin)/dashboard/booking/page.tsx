"use client";
import BookingCard from "@/components/booking/BookingCard";
import BookingDropDown from "@/components/booking/BookingDropDown";
import { Loader } from "@/components/loader/Loader";
import useCarCrud from "@/hooks/useCarCrud";
import Link from "next/link";
import React, { useState } from "react";
import { LuLayoutGrid } from "react-icons/lu";
import { VscSettings } from "react-icons/vsc";

const Booking = () => {
  const { cars, loading, error } = useCarCrud();
  const [selectedCar, setSelectedCar] = useState<string | null>(null);

  const handleFilterCar =
    selectedCar && selectedCar !== "All Cars"
      ? cars.filter((car) => car.carName === selectedCar)
      : cars;

  return (
    <div>
      <h1 className="font-[700] text-[30px] mb-[30px] dark:text-white">
        Booking
      </h1>
      <div className="flex max-sm:flex-wrap  gap-3 justify-between items-center  mb-[34px]">
        <div className="flex gap-4">
          <BookingDropDown
            setSelectedCar={setSelectedCar}
            className="text-[#5F6165]"
          />
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
        {loading ? (
          <div className="flex justify-center w-full">
            <Loader style="w-8 h-8 border-4 border-[#A162F7] border-b-transparent rounded-full inline-block animate-spinCustom" />
          </div>
        ) : error ? (
          <div className="text-red-500 font-bold text-xl">{error}</div>
        ) : (
          <>
            {handleFilterCar?.map((car) => (
              <Link
                href={`/dashboard/assets/${car?.id}`}
                key={car?.id}
                onClick={() => console.log("car id:>>", car?.id)}
              >
                <BookingCard
                  carName={car?.carName}
                  carImage={car?.imageUrl}
                  price={car?.price}
                />
              </Link>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Booking;
