import Image from "next/image";
import React from "react";
import YourOrderCard from "./YourOrderCard";

const YourOrder = () => {
  return (
    <div className=" flex flex-col">
      <div className=" flex max-lg:flex-col w-full gap-5 ">
        <div className=" flex flex-col items-center justify-center gap-y-6 rounded-[10px] dark:bg-[#242731] bg-white px-[34px] py-[30px] ">
          <h1 className="dark:text-white  text-[#242731] leading-[31.25px] text-[24px] font-bold ">
            Your Order
          </h1>
          <Image
            src={"/assets/service-time-graph.png"}
            alt="your order img does not show"
            width={148}
            height={153}
          />
        </div>
        <div className="flex-1 flex flex-col gap-y-2.5 ">
          <YourOrderCard
            circleDesign="bg-[#70CF97]"
            amount="$32"
            heading="Brake fluid change"
          />
          <YourOrderCard
            circleDesign="bg-[#FF6370] "
            amount="$32"
            heading="Diagnostics"
          />
          <YourOrderCard
            circleDesign="bg-[#A162F7] "
            amount="$10"
            heading="External Washing"
          />
          <button className="dark:bg-[#242731] dark:text-white bg-[#EFEBF1] text-[#5F6165] text-[20px] font-bold leading-[26.04px] mt-0.5 py-[15px] rounded-[8px] border dark:border-[#464155] border-[#D8D2E7] border-dashed ">
            Add Services
          </button>
        </div>
      </div>
      <button className="text-center mt-5 leading-[31.25px] text-[24px] text-white font-bold bg-[#A162F7] py-[14px] rounded-[10px]  ">
        Pay $86
      </button>
    </div>
  );
};

export default YourOrder;
