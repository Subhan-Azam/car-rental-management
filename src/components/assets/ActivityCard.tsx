import Image from "next/image";
import React from "react";

const ActivityCard = () => {
  return (
    <div className="dark:bg-[#242731] bg-white rounded-[14px] py-[20px] px-6 flex flex-col items-center  justify-center transition-all duration-300">
      <div className="flex items-center justify-between w-full ">
        <h2 className="dark:text-white text-[#242731] leading-[26.04px] text-[20px] font-medium  ">
          Activity
        </h2>
        <h4 className="dark:text-white text-[#A4A5A6] leading-[18.23px] text-[14px] font-medium ">
          View All
        </h4>
      </div>
      <Image
        src={"/assets/activity-graph.png"}
        alt="graph img does not show"
        width={591}
        height={190}
        className=" max-lg:w-[500px]  "
      />
    </div>
  );
};

export default ActivityCard;
