"use client";
import { useAppSelector } from "@/store/store";
import React from "react";
import RecommendCard from "./RecommendCard";
import Link from "next/link";
import usePopularCars from "@/hooks/usePopularCars";
import { Loader } from "../loader/Loader";
import useBooking from "@/hooks/useBooking";

const RecommendSection = () => {
  const { cars } = useAppSelector((state) => state.carCrudStore);
  const { loading, error } = usePopularCars();
  const { clickeViewsHandler } = useBooking();

  if (loading) {
    return (
      <p className="text-red-500 text-xl font-bold w-full flex justify-center mt-10">
        <Loader style="w-8 h-8 border-4 border-[#A162F7] border-b-transparent rounded-full inline-block animate-spinCustom" />
      </p>
    );
  }

  if (error) {
    return <p className="text-red-500 text-xl font-bold mt-4">{error}</p>;
  }
  const bgColors = ["bg-[#E1DFA4]", "bg-[#E3ECF1]", "bg-[#F4E3E5]"];
  return (
    <>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px] w-full">
        {cars?.map((item, index) => (
          <Link href={`/dashboard/assets/${item?.id}`} key={item?.id}>
            <RecommendCard
              brand={item?.brand}
              carName={item?.carName}
              image={item?.imageUrl}
              price={item?.price}
              views={item?.views}
              onClick={() => clickeViewsHandler(item?.id)}
              className={bgColors[index % bgColors.length]}
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default RecommendSection;
