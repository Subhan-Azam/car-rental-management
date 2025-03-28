import React from "react";

interface ImageType {
  name: string;
  icon: string;
}
const CarBrandCard = ({ name, icon }: ImageType) => {
  return (
    <div className="flex items-center justify-center flex-col rounded-[8px] md:w-[185px] w-full h-[120px] bg-[#0F0F0F0D]">
      {/* <Image src={"/icons/toyota.png"} alt="icon" width={50} height={50} /> */}
      <img src={icon} alt="icon" />
      <p className="text-[#0F0F0F] font-[500] text-[16px] mt-[12px]">{name}</p>
    </div>
  );
};

export default CarBrandCard;
