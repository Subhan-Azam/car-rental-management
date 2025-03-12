import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import OffrersIcon from "./OffrersIcon";
import { FaCarRear } from "react-icons/fa6";

const OffersCard = () => {
  return (
    <div className="mb-[20px] w-full px-[29px] py-[23px] bg-white rounded-[10px] dark:bg-[#242731] dark:text-white transition-all duration-300">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-[700] text-[20px]">Killan James</h3>
          <div>
            <span className="font-[500] text-[18px] text-[#FF6464]">
              $16,605
            </span>{" "}
            <span className="font-[500] text-[12px] text-[#A4A5A6]">
              avarage price
            </span>
          </div>
          <p className="font-[500] text-[12px] text-[#72767C]">
            market avarage is $16,224
          </p>
          <button className="bg-[#FF6370] px-[14px] py-1 rounded-[10px]">
            <FaArrowRightLong size={11} color="white" />
          </button>
        </div>

        <div className="flex flex-col items-center">
          <Image
            src={"/assets/chart.png"}
            alt="chart"
            width={100}
            height={100}
            className="w-[83px]"
          />
          <p className="font-[700] text-[14px] text-[#72767C]">
            Impression Share
          </p>
        </div>

        <div>
          <Image
            src={"/assets/circle.png"}
            alt="chart"
            width={100}
            height={100}
            className="w-[98px]"
          />
        </div>

        <div>
          <OffrersIcon
            title="$1,174"
            para="Model Spend"
            icon={<FaCarRear />}
            iconStyle="text-[#407EF9] bg-[#407EF91A]"
            style="text-[#407EF9]"
          />
        </div>
        <div>
          <OffrersIcon
            title="$1,174"
            para="Model Spend"
            icon={<FaCarRear />}
            iconStyle="text-[#FF6370] bg-[#FF7E861A]"
            style="text-[#FF6370]"
          />
        </div>
        <div>
          <OffrersIcon
            title="$811"
            para="Spend per Unit Turned"
            icon={<FaCarRear />}
            iconStyle="text-[#A162F7] bg-[#A162F71A]"
            style="text-[#A162F7]"
          />
        </div>
      </div>
    </div>
  );
};

export default OffersCard;
