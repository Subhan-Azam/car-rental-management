import React from "react";
import RecommendCard from "@/components/dashboard/RecommendCard";
import PerformanceCard from "@/components/dashboard/PerformanceCard";
import performanceCardImg1 from "../../../../public/assets/dashboard-card-icon.png";
import performanceCardImg2 from "../../../../public/assets/dashboard-card-icon.png";
import performanceCardImg3 from "../../../../public/assets/dashboard-card-icon.png";
import performanceCardImg4 from "../../../../public/assets/dashboard-card-icon.png";
import DashboardCharts from "@/components/dashboard/DashboardCharts";

const Dashboard = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        <PerformanceCard
          className1="bg-[#A162F7]"
          className2="text-white"
          heading="Energy"
          src={performanceCardImg1}
        />
        <PerformanceCard
          className1="bg-white"
          className2="text-[#242731]"
          heading="Range"
          src={performanceCardImg2}
        />
        <PerformanceCard
          className1="bg-white"
          className2="text-[#242731]"
          heading="Break fluid"
          src={performanceCardImg3}
        />
        <PerformanceCard
          className1="bg-white"
          className2="text-[#242731]"
          heading="Tire Wear"
          src={performanceCardImg4}
        />
      </div>

      <div className="md:grid md:grid-cols-2 grid grid-cols-1 gap-x-[30px]">
        <DashboardCharts heading="Miles" para="256 Miles" />
        <DashboardCharts
          heading="Car"
          para="20 February 2022"
          className1="flex-row-reverse"
          className2="bg-[#F5F4F6] rounded-[10px] "
          className3=" focus:bg-[#FF764C] "
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-6">
        <RecommendCard className="bg-[#E1DFA4]" heading="Mini Cooper" />
        <RecommendCard className="bg-[#E3ECF1]" heading="Porsche 911 Carrera" />
        <RecommendCard className="bg-[#F4E3E5]" heading="Mercedes" />
      </div>
    </div>
  );
};

export default Dashboard;
