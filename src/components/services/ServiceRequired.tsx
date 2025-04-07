import React from "react";
import Image from "next/image";
import ServicesRequiredCard from "./ServicesRequiredCard";

const ServicesRequired = () => {
  return (
    <div className="">
      <h1 className="dark:text-white text-[#242731] text-[24px] leading-[31.25px] font-bold mb-6  ">
        Service Required
      </h1>
      <div className="flex items-center gap-x-3 dark:bg-[#242731] bg-white rounded-[14px] py-6 px-6 w-full max-sm:justify-center ">
        <Image
          src={"/icons/service-icon-card.png"}
          alt="SERVICES_REQUIRED img does not show"
          width={30}
          height={30}
          className="max-sm:hidden "
        />
        <div className="flex flex-col items-center gap-y-[45px] ">
          <ServicesRequiredCard />
          <ServicesRequiredCard />
          <ServicesRequiredCard />
        </div>
      </div>
    </div>
  );
};

export default ServicesRequired;
