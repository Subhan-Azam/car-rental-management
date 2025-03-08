import React from "react";
import { FaRegComment } from "react-icons/fa";
import { BsExclamationCircle } from "react-icons/bs";
import { SlWrench } from "react-icons/sl";
import NotiesCard from "./NotiesCard";

const Noties = () => {
  return (
    <div className="flex-1 dark:bg-[#242731] bg-white px-5 py-[13px] rounded-[14px] transition-all duration-300">
      <h1 className="dark:text-white text-[#5a7ceb] leading-[26.04px] text-[20px] font-bold  ">
        Noties
      </h1>
      <div className=" flex flex-col gap-y-[18px] mt-4 ">
        <NotiesCard
          className="text-white bg-[#70CF97]"
          icon={
            <FaRegComment className="w-4 h-4 text-[#242731] dark:text-white " />
          }
          date="COMPLETED"
          para="Book for General Service"
          title="Monday, 6th Apirl 2020"
        />
        <NotiesCard
          className=" dark:text-white dark:bg-[#2B2E38]  text-[#242731] bg-[#ECEEF0]"
          icon={<BsExclamationCircle className="w-4 h-4 text-[#FF5A5A] " />}
          date="14:07-21/11/2021"
          para="Vehicle LV 001 has been marked for recall."
          title="Thursday, 24th October 2021"
        />
        <NotiesCard
          className="dark:text-white dark:bg-[#2B2E38] text-[#242731] bg-[#ECEEF0]"
          icon={<SlWrench className="w-4 h-4 text-[#72767C] " />}
          date="14:07-21/11/2021"
          para="Maintenance Completed, Collect"
          title="Monday, 13th August 2018"
        />
      </div>
    </div>
  );
};

export default Noties;
