import React, { ReactNode } from "react";

interface NotiesCardPropsCard {
  title?: string;
  date?: string;
  para?: string;
  icon?: ReactNode;
  className?: string;
}

const NotiesCard: React.FC<NotiesCardPropsCard> = ({
  title,
  date,
  para,
  icon,
  className,
}) => {
  return (
    <div className=" flex  ">
      <div className="dark:bg-[#2B2E38] dark:shadow-[0px_2px_4px_rgba(14,14,14,0.2)] bg-white flex items-center justify-center mr-[14px] rounded-[50%] w-11 h-11 shadow-[0px_2px_4px_rgba(147,144,144,0.2)] ">
        {icon}
      </div>
      <div className=" flex flex-col items-start justify-start  ">
        <h2 className=" dark:text-white text-black leading-[16.93px] text-[13px] font-medium">
          {title}
        </h2>
        <h4 className=" leading-[14.32px] mt-1 text-[11px] dark:text-[#7C7C8D] ">
          {para}
        </h4>
        <h3
          className={` ${className}  rounded-[4px] mt-2.5 flex items-center justify-center h-[21px] px-2.5  leading-[15px] text-[10px] font-medium `}
        >
          {date}
        </h3>
      </div>
    </div>
  );
};

export default NotiesCard;
