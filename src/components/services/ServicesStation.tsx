import React from "react";
import ServicesSmallCard from "./ServiceCard";

const ServicesStation = () => {
  return (
    <div className="max-lg:hidden ">
      <h1 className="dark:text-white text-[#242731] text-[24px] leading-[31.25px] font-bold mb-6  ">
        Service Station
      </h1>
      <div className="flex items-center gap-x-2.5 justify-around mb-4 ">
        <ServicesSmallCard title="A1" />
        <ServicesSmallCard title="A2" />
        <ServicesSmallCard title="A3" />
        <ServicesSmallCard
          className="shadow-[0px_8px_24px_0px_rgba(255, 126, 134, 0.3)]  [background-color:#FF6370!important] text-white "
          title="A4"
        />
        <ServicesSmallCard title="A5" />
        <ServicesSmallCard title="A6" />
        <ServicesSmallCard title="A7" />
        <ServicesSmallCard title="A8" />
        <ServicesSmallCard title="A9" />
        <ServicesSmallCard
          className=" [background-color:#FF6370!important] text-white shadow-[0px_8px_24px_0px_rgba(255, 126, 134, 0.3)] "
          title="A10"
        />
      </div>
      <div className="flex items-center justify-around gap-x-2.5 ">
        <ServicesSmallCard
          className="shadow-[0px_8px_24px_0px_rgba(255, 126, 134, 0.3)]  [background-color:#FF6370!important] text-white "
          title="B1"
        />
        <ServicesSmallCard title="B2" />
        <ServicesSmallCard title="B3" />
        <ServicesSmallCard title="B4" />
        <ServicesSmallCard title="B5" />
        <ServicesSmallCard title="B6" />
        <ServicesSmallCard
          className="shadow-[0px_8px_24px_0px_rgba(255, 126, 134, 0.3)]  [background-color:#FF6370!important] text-white "
          title="B7"
        />
        <ServicesSmallCard title="B8" />
        <ServicesSmallCard
          className="shadow-[0px_8px_24px_0px_rgba(161, 98, 247, 0.24)]  [background-color:#A162F7!important] text-white "
          title="B9"
        />
        <ServicesSmallCard title="B10" />
      </div>

      <div className="flex items-center justify-around mt-[27px] mb-[30px] ">
        <div className="flex items-center gap-x-2 ">
          <span className=" rounded-[50%] w-3 h-3 border-[0.5px] border-[#72767C] dark:bg-[#5F6165] bg-white "></span>
          <h5 className="leading-[20.83px] dark:text-[#E0E4E7] text-[#72767C] font-medium  ">
            Ready
          </h5>
        </div>
        <div className="flex items-center gap-x-2">
          <span className="w-[10px] h-[10px] bg-[#FF6370] rounded-[50%] "></span>
          <h5 className="leading-[20.83px] dark:text-[#E0E4E7] text-[#72767C] font-medium  ">
            Booked
          </h5>
        </div>
        <div className="flex items-center gap-x-2">
          <span className="w-[10px] h-[10px] bg-[#A162F7] rounded-[50%] "></span>
          <h5 className="leading-[20.83px] dark:text-[#E0E4E7] text-[#72767C] font-medium  ">
            Current Station
          </h5>
        </div>
      </div>
    </div>
  );
};

export default ServicesStation;