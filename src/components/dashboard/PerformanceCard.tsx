// import Image, { StaticImageData } from "next/image";
// import React from "react";
// import pieChart from "../../../public/assets/pie-chart.png";

// interface PerformanceCardPropsTypes {
//   className1?: string;
//   className2?: string;
//   heading?: string;
//   src?: string | StaticImageData;
// }

// const PerformanceCard: React.FC<PerformanceCardPropsTypes> = ({
//   className1,
//   className2,
//   heading,
//   src,
// }) => {
//   return (
//     <div
//       className={` ${className1} flex flex-col justify-between items-center gap-y-[30px] rounded-2xl py-[22.5px] px-[60px] `}
//     >
//       <div className="flex flex-col justify-between items-center gap-y-[10px] ">
//         <span>
//           <Image src={src!} alt="performanceCardImg1 does not show" />
//         </span>
//         <h3
//           className={` ${className2} text-[24px] leading-[31.25px] font-bold text-nowrap `}
//         >
//           {heading}
//         </h3>
//       </div>
//       <Image src={pieChart} alt="pie chart does not show" />
//     </div>
//   );
// };

// export default PerformanceCard;




import Image, { StaticImageData } from "next/image";
import React from "react";
import pieChart from "../../../public/assets/pie-chart.png";

interface PerformanceCardPropsTypes {
  className1?: string;
  className2?: string;
  heading?: string;
  src?: string | StaticImageData;
}

const PerformanceCard: React.FC<PerformanceCardPropsTypes> = ({
  className1 = "",
  className2 = "",
  heading = "Performance",
  src,
}) => {
  return (
    <div
      className={` ${className1} dark:bg-[#242731]  transition-all duration-300 flex flex-col justify-between items-center gap-y-4 md:gap-y-6 rounded-2xl p-4 sm:p-6 md:p-8 w-full max-w-[400px] bg-white shadow-md`}
    >
      {/* Top Section */}
      <div className="flex flex-col justify-between items-center gap-y-2 md:gap-y-4">
        {src && (
          <Image
            src={src}
            alt="Performance Image"
            width={80}
            height={80}
            className="object-contain"
          />
        )}
        <h3 className={`${className2} dark:text-white text-black text-lg md:text-xl lg:text-2xl font-bold text-center`}>
          {heading}
        </h3>
      </div>

      {/* Pie Chart */}
      <Image
        src={pieChart}
        alt="Pie Chart"
        width={100}
        height={100}
        className="object-contain"
      />
    </div>
  );
};

export default PerformanceCard;
