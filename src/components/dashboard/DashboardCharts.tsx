// "use client";
// import React from "react";
// import DashboardMilesChart from "../charts/DashboardMilesChart";
// import DashboardCarsChart from "../charts/DashboardCarsChart";

// interface DashboardMilesChartPropsTypes {
//   heading?: string;
//   para?: string;
//   className1?: string;
//   className2?: string;
//   className3?: string;
// }

// const DashboardCharts: React.FC<DashboardMilesChartPropsTypes> = ({
//   heading,
//   para,
//   className1,
//   className2,
//   className3,
// }) => {
//   return (
//     <div className="bg-white px-[35px] mt-[23px] rounded-[14px] py-[15px] flex flex-col items-center">
//       <div className="w-full">
//         <h3 className="text-[20px] text-[#242731] leading-[26.04px]">
//           <span className="font-bold">{heading}</span> statistics
//         </h3>
//         <div
//           className={`${className1} mt-[24px] flex items-center justify-between`}
//         >
//           <div className={`${className2} flex items-center gap-x-[10px]`}>
//             <button
//               className={`${className3} leading-[13.02px] text-[10px] text-[#5F6165] focus:bg-blue-500 focus:text-white py-1 px-3 rounded-[24px]`}
//             >
//               Day
//             </button>
//             <button
//               className={`${className3} leading-[13.02px] text-[10px] text-[#5F6165] focus:bg-blue-500 focus:text-white py-1 px-3 rounded-[24px]`}
//             >
//               Week
//             </button>
//             <button
//               className={`${className3} leading-[13.02px] text-[10px] text-[#5F6165] focus:bg-blue-500 focus:text-white py-1 px-3 rounded-[24px]`}
//             >
//               Month
//             </button>
//           </div>
//           <h3 className="text-[#5F6165] text-[14px] leading-[18.23px] font-bold">
//             {para}
//           </h3>{" "}
//         </div>
//         {heading === "Miles" ? <DashboardMilesChart /> : <DashboardCarsChart />}
//       </div>
//     </div>
//   );
// };

// export default DashboardCharts;

"use client";
import React from "react";
import DashboardMilesChart from "../charts/DashboardMilesChart";
import DashboardCarsChart from "../charts/DashboardCarsChart";

interface DashboardMilesChartPropsTypes {
  heading?: string;
  para?: string;
  className1?: string;
  className2?: string;
  className3?: string;
}

const DashboardCharts: React.FC<DashboardMilesChartPropsTypes> = ({
  heading,
  para,
  className1 = "",
  className2 = "",
  className3 = "",
}) => {
  return (
    <div className="bg-white px-5 sm:px-8 md:px-10 lg:px-12 xl:px-14 mt-6 rounded-xl py-4 sm:py-6 flex flex-col items-center w-full">
      <div className="w-full">
        <h3 className="text-lg sm:text-xl text-[#242731] font-semibold">
          <span className="font-bold">{heading}</span> statistics
        </h3>

        <div
          className={`mt-6 flex flex-wrap items-center justify-between gap-4 ${className1}`}
        >

          <div className={`flex items-center gap-2 sm:gap-4 ${className2}`}>
            {["Day", "Week", "Month"].map((timeframe) => (
              <button
                key={timeframe}
                className={`text-xs sm:text-sm text-[#5F6165] font-medium py-1.5 px-4 rounded-full transition duration-300 hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white ${className3}`}
              >
                {timeframe}
              </button>
            ))}
          </div>

          <h3 className="text-[#5F6165] text-sm sm:text-base font-bold">
            {para}
          </h3>
        </div>

        <div className="mt-6 w-full">
          {heading === "Miles" ? (
            <DashboardMilesChart />
          ) : (
            <DashboardCarsChart />
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardCharts;
