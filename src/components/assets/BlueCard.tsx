import React from "react";

interface BlueCardPropsTypes {
  title1?: string;
  amount1?: string;
  title2?: string;
  amount2?: string;
}

const BlueCard: React.FC<BlueCardPropsTypes> = ({
  title1,
  title2,
  amount1,
  amount2,
}) => {
  return (
    <div className="flex items-center justify-between mb-[25px]">
      <div className="mb-1">
        <h4 className="dark:text-[#808191] text-[#C6DCFC] leading-[20.83px] font-medium transition-all duration-300">
          {title1}
        </h4>
        <h2 className=" text-white leading-[26.04px] text-[20px] font-bold">
          {amount1}
        </h2>
      </div>
      <span className="dark:bg-[#333642] bg-[#579BFF] h-[40px] w-0.5 "></span>
      <div>
        <h4 className="dark:text-[#808191] text-[#C6DCFC] leading-[20.83px] font-medium ">
          {title2}
        </h4>
        <h2 className=" text-white leading-[26.04px] text-[20px] font-bold">
          {amount2}
        </h2>
      </div>
    </div>
  );
};

export default BlueCard;
