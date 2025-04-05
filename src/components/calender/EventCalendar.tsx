import React from "react";
// import EventCardCalender from "./EventCardCalender";

// import AvatorImg1 from "../../../public/assets/calendar/avator.png";
// import AvatorImg2 from "../../../public/assets/calendar/card2Avator.png";

const EventCalendar = () => {
  return (
    <div className="flex flex-col gap-y-[17px]  py-6 px-[25px] max-sm:py-2 max-sm:px-3 dark:bg-[#242731] bg-white ">
      <h1 className="leading-[31.25px] dark:text-white text-[#242731] text-[24px] font-bold  ">
        Upcoming Events
      </h1>
      <div className="flex items-center gap-x-[19px] ">
        <h3 className=" text-[#72767C] leading-[18.23px] text-[14px] font-medium ">
          08:00
        </h3>
        <span className=" w-full h-[2px] dark:bg-[#2C303D] bg-[#F5F5F5]  "></span>
      </div>
      <div className="flex items-center gap-x-[19px]  ">
        <h3 className=" text-[#72767C] leading-[18.23px] text-[14px] font-medium ">
          09:00
        </h3>
        {/* <EventCardCalender src={AvatorImg1} /> */}
      </div>
      <div className="flex items-center gap-x-[19px] ">
        <h3 className=" text-[#72767C] leading-[18.23px] text-[14px] font-medium ">
          10:00
        </h3>
        <span className=" w-full h-[2px] dark:bg-[#2C303D] bg-[#F5F5F5]  "></span>
      </div>
      <div className="flex items-center gap-x-[19px]  ">
        <h3 className=" text-[#F65E5E] leading-[18.23px] text-[14px] font-medium ">
          10:15
        </h3>
        <div className=" flex items-center w-full">
          <span className="bg-[#F65E5E] w-2.5 h-2.5 rounded-[50%] "></span>
          <span className=" bg-[#FAAEAE] h-[2px] w-full  "></span>
        </div>
      </div>
      <div className="flex items-center gap-x-[19px] ">
        <h3 className=" text-[#72767C] leading-[18.23px] text-[14px] font-medium ">
          11:00
        </h3>
        <span className=" w-full h-[2px] dark:bg-[#2C303D] bg-[#F5F5F5]  "></span>
      </div>
      <div className="flex items-center gap-x-[19px]  ">
        <h3 className=" text-[#72767C] leading-[18.23px] text-[14px] font-medium ">
          12:00
        </h3>
        {/* <EventCardCalender className="bg-[#70CF97] " src={AvatorImg2} /> */}
      </div>
      <div className="flex items-center gap-x-[19px] ">
        <h3 className=" text-[#72767C] leading-[18.23px] text-[14px] font-medium ">
          01:00
        </h3>
        <span className=" w-full h-[2px] dark:bg-[#2C303D] bg-[#F5F5F5]"></span>
      </div>
    </div>
  );
};

export default EventCalendar;