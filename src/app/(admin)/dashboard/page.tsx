"use client";
import React from "react";
import PerformanceCard from "@/components/dashboard/PerformanceCard";
import DashboardCharts from "@/components/dashboard/DashboardCharts";
import RecommendSection from "@/components/dashboard/RecommendSection";
import PerformenceChart from "@/components/dashboard/PerformenceChart";

const Dashboard = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        <PerformanceCard
          className1="bg-[#A162F7]"
          className2="text-[#242731]"
          heading="Energy"
          src={"/icons/lightning-icon.png"}
          chart={<PerformenceChart title="45%" progressColor="#A162F7" />}
        />
        <PerformanceCard
          className1="bg-white"
          className2="text-[#242731]"
          heading="Range"
          src={"/icons/dashboard-card-icon.png"}
          chart={<PerformenceChart title="57%" progressColor="#FF7E86" />}
        />
        <PerformanceCard
          className1="bg-white"
          className2="text-[#242731]"
          heading="Break fluid"
          src={"/icons/blood-icon.png"}
          chart={<PerformenceChart title="9%" progressColor="#A162F7" />}
        />
        <PerformanceCard
          className1="bg-white"
          className2="text-[#242731]"
          heading="Tire Wear"
          src={"/icons/tier-icon.png"}
          chart={<PerformenceChart title="25%" progressColor="#F6CC0D" />}
        />
      </div>

      <div className="my-8 md:grid md:grid-cols-2 grid grid-cols-1 gap-[30px]">
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
