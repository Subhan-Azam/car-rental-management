import React from "react";

interface ServiceScheduleCardPropsTypes {
  para?: string;
  date?: string;
  price?: string;
}

const ServiceScheduleCard: React.FC<ServiceScheduleCardPropsTypes> = ({
  para,
  date,
  price,
}) => {
  return (
    <div>
      <h3 className=" dark:text-[#E0E4E7] text-[#242731] leading-[20.83px] font-medium ">
        {para}
      </h3>
      <div className="flex items-center justify-between mt-4 ">
        <h4 className=" text-[#72767C] text-[14px] leading-[18.23px] font-medium ">
          {date}
        </h4>
        <span className="dark:bg-[#242731] bg-[#ECECEC] w-[1px] h-[20px] max-sm:hidden "></span>
        <h4 className=" text-[#72767C] text-[14px] leading-[18.23px] font-medium">
          {price}
        </h4>
      </div>
    </div>
  );
};

export default ServiceScheduleCard;