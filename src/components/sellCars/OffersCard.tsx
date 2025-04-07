import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import OffrersIcon from "./OffrersIcon";
import { FaCarRear } from "react-icons/fa6";
import { RiShareForwardLine } from "react-icons/ri";
import { BsCurrencyDollar } from "react-icons/bs";

const OffersCard = () => {
  return (
    <div className="mb-5 w-full px-4 py-5 bg-white rounded-lg dark:bg-[#242731] dark:text-white transition-all duration-300 md:px-7 md:py-6">
      <div className="flex flex-col md:flex-row flex-wrap justify-between items-center gap-6">
        <div className="w-full md:w-auto text-center md:text-left">
          <h3 className="font-bold text-lg md:text-xl lg:text-[20px]">
            Killan James
          </h3>
          <div className="mt-1">
            <span className="font-medium text-base md:text-lg text-[#FF6464]">
              $16,605
            </span>
            <span className="font-medium text-xs md:text-sm text-[#A4A5A6] ml-2">
              avarage price
            </span>
          </div>
          <p className="font-medium text-xs md:text-sm text-[#72767C] mt-1">
            market avarage is $16,224
          </p>
          <button className="bg-[#FF6370] px-3 py-1 md:px-4 rounded-lg mt-2 inline-flex items-center">
            <FaArrowRightLong size={11} color="white" />
          </button>
        </div>

        <div className="w-full md:w-auto flex flex-col items-center">
          <Image
            src={"/assets/chart.png"}
            alt="chart"
            width={100}
            height={100}
            className="w-16 md:w-20 lg:w-[83px] h-auto"
          />
          <p className="font-bold text-xs md:text-sm lg:text-[14px] text-[#72767C] mt-2">
            Impression Share
          </p>
        </div>

        <div className="w-full md:w-auto">
          <Image
            src={"/assets/circle.png"}
            alt="chart"
            width={100}
            height={100}
            className="w-20 md:w-24 lg:w-[98px] h-auto mx-auto"
          />
        </div>

        <div className="w-full md:w-auto flex flex-col sm:flex-row gap-6 justify-center items-center">
          <OffrersIcon
            title="$1,174"
            para="Model Spend"
            icon={<FaCarRear />}
            iconStyle="text-[#407EF9] bg-[#407EF91A]"
            style="text-[#407EF9]"
          />
          <OffrersIcon
            title="$1,174"
            para="Model Spend"
            icon={<RiShareForwardLine />}
            iconStyle="text-[#FF6370] bg-[#FF7E861A]"
            style="text-[#FF6370]"
          />
          <OffrersIcon
            title="$811"
            para="Spend per Unit Turned"
            icon={<BsCurrencyDollar />}
            iconStyle="text-[#A162F7] bg-[#A162F71A]"
            style="text-[#A162F7]"
          />
        </div>
      </div>
    </div>
  );
};

export default OffersCard;
