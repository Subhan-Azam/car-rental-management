import ServicesRequired from "@/components/services/ServiceRequired";
import ServicesSchedule from "@/components/services/ServicesSchedule";
import ServicesStation from "@/components/services/ServicesStation";
import VehicleConditionSummary from "@/components/services/VehicleConditionSummary";
import YourOrder from "@/components/services/YourOrder";
import React from "react";

const Services = () => {
  return (
    <div className="p-4 max-sm:p-1 ">
      <div className="flex max-xl:flex-col gap-4">
        <div className="flex-1">
          <ServicesStation />
          <YourOrder />
        </div>
        <div className="flex-1">
          <ServicesRequired />
          <ServicesSchedule />
        </div>
      </div>

      <div className="mt-8">
        <div className="grid place-items-center sm:place-items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 dark:bg-[#242731] bg-white p-6 rounded-[14px]">
          <VehicleConditionSummary
            className="bg-[#A162F7] w-full"
            condition="Don’t Replace"
            parts="Engine"
            title="Oil Level"
            imgSrc="/assets/oil-level.png"
          />

          <VehicleConditionSummary
            className="bg-[#70CF97] w-full"
            condition="Still Good"
            parts="Wheels"
            title="Brake Pads"
            imgSrc="/assets/brake-pad.png"
          />

          <VehicleConditionSummary
            className="bg-[#F6CC0D] w-full"
            condition="Need Change"
            parts="Drivetrain"
            title="Steering"
            imgSrc="/assets/steering.png"
          />

          <VehicleConditionSummary
            className="bg-[#FF764C] w-full"
            condition="Don’t Replace"
            parts="Engine"
            title="Oil Level"
            imgSrc="/assets/oil-level.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
