import React from "react";

interface OffrersIconType {
  title: string;
  para: string;
  icon: React.ReactNode;
  style?: string;
  iconStyle?: string;
}
const OffrersIcon = ({
  title,
  para,
  icon,
  style,
  iconStyle,
}: OffrersIconType) => {
  return (
    <div>
      <div
        className={`${iconStyle} w-[36px] h-[36px] grid place-items-center rounded-[8px]`}
      >
        {icon}
      </div>
      <h3 className={`${style} font-[700] text-[20px]`}>{title}</h3>
      <p className="font-[500] text-[12px] text-[#808191]">{para}</p>
    </div>
  );
};

export default OffrersIcon;
