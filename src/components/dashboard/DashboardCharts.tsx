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
    <div className="bg-white px-5 sm:px-8 md:px-10 lg:px-12 xl:px-14 rounded-xl py-4 sm:py-6 flex flex-col items-center w-full dark:bg-[#242731] transition-all duration-300">
      <div className="w-full">
        <h3 className="text-lg sm:text-xl text-[#242731] dark:text-white font-semibold">
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
