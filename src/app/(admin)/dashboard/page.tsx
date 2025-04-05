"use client";
import React from "react";
import PerformanceCard from "@/components/dashboard/PerformanceCard";
import performanceCardImg1 from "../../../../public/icons/dashboard-card-icon.png";
import performanceCardImg2 from "../../../../public/icons/dashboard-card-icon.png";
import performanceCardImg3 from "../../../../public/icons/dashboard-card-icon.png";
import performanceCardImg4 from "../../../../public/icons/dashboard-card-icon.png";
import DashboardCharts from "@/components/dashboard/DashboardCharts";
import RecommendSection from "@/components/dashboard/RecommendSection";

const Dashboard = () => {
  return (
    <div>
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
          className2="bg-[#F5F4F6] rounded-[10px] dark:bg-[#2B2E38] "
          className3=" focus:bg-[#FF764C] "
        />
      </div>

      <RecommendSection />
    </div>
  );
};

export default Dashboard;
