import Image from "next/image";
import React from "react";

interface WorkCardType {
  heading: string;
  desc: string;
  icon: string;
}
const WorkCard = ({ icon, heading, desc }: WorkCardType) => {
  const imageUrl = icon.startsWith("//") ? `https:${icon}` : icon;

  return (
    <div className="z-10 max-w-[692px] h-[170px] flex items-center justify-center md:pl-10 pl-3 pr-3 bg-white border rounded-[24px]">
      <div className="bg-[#F5F5F5] w-[54px] h-[106px] rounded-[16px] flex justify-center items-center mr-[20px]">
        <Image
          src={imageUrl}
          alt="icon"
          width={200}
          height={200}
          className="w-[20px] h-[20px]"
        />
      </div>

      <div>
        <h3>{heading}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default WorkCard;
