import React from "react";

const ServicesRequiredCard = () => {
  return (
    <div className=" ">
      <h1 className="dark:text-white text-[#5F6165] leading-[26.04px] text-[20px] font-bold mb-[13px] ">
        Center Care
      </h1>
      <div className="flex items-center gap-x-4 max-sm:flex-col-reverse ">
        <h2 className="dark:text-white text-[#242731] leading-[20.83px] font-medium  text-nowrap">
          Price : $48
        </h2>
        <span className="dark:bg-[#2C303D] bg-[#ECECEC] w-[1px] h-[20px] max-sm:hidden "></span>
        <h2 className="dark:text-[#7C7C8D] text-[#5F6165] leading-[20.83px] font-medium text-nowrap ">
          Processing : 1 hours
        </h2>
      </div>
    </div>
  );
};

export default ServicesRequiredCard;
