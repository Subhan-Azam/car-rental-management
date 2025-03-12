// import BookingDropDown from "@/components/booking/BookingDropDown";
// import OffersCard from "@/components/sellCars/OffersCard";
// import Image from "next/image";
// import React from "react";

// const SellCars = () => {
//   return (
//     <div>
//       <h1 className="font-[700] text-[30px] mb-[30px] dark:text-white ">
//         Sell Cars
//       </h1>

//       <div className="flex gap-16">
//         <div className="max-w-[657px] w-full h-[398px] bg-white rounded-[14px] px-[43px] py-[25px]">
//           <h2 className="font-[700] text-[30px]">2022 Mercedes Benz</h2>
//           <Image
//             src={"/assets/sell-car.png"}
//             alt="Car-Image"
//             width={250}
//             height={250}
//             className="w-[545px] h-[316px]"
//           />
//         </div>

//         <div className="max-w-[345px] w-full h-[398px] bg-white rounded-[14px] px-[43px] py-[25px]">
//           <h2 className="font-[700] text-[24px]">2022 Mercedes Benz</h2>
//           <Image
//             src={"/assets/sell-car-graph.png"}
//             alt="Car-Image"
//             width={250}
//             height={250}
//             className="w-[545px] h-[316px]"
//           />
//         </div>
//       </div>

//       <div className="flex justify-between items-center my-[30px]">
//         <h1 className="font-[700] text-[30px] dark:text-white ">
//           Offers
//         </h1>
//         <div className="flex gap-[16px]">
//           <BookingDropDown className="text-[#A162F7]" title="New" />
//           <BookingDropDown className="text-[#A162F7]" title="Toyota" />
//         </div>
//       </div>

//       <OffersCard />
//       <OffersCard />
//     </div>
//   );
// };

// export default SellCars;

import BookingDropDown from "@/components/booking/BookingDropDown";
import OffersCard from "@/components/sellCars/OffersCard";
import Image from "next/image";
import React from "react";

const SellCars = () => {
  return (
    <div className="px-4 md:px-8 lg:px-12">
      <h1 className="font-[700] text-[30px] mb-[30px] dark:text-white transition-all duration-300">
        Sell Cars
      </h1>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-16">
        <div className="w-full max-w-[657px] bg-white rounded-[14px] px-[20px] md:px-[43px] py-[25px] flex flex-col items-center dark:bg-[#242731] dark:text-white transition-all duration-300">
          <h2 className="font-[700] text-[24px] md:text-[30px] text-center">
            2022 Mercedes Benz
          </h2>
          <Image
            src={"/assets/sell-car.png"}
            alt="Car-Image"
            width={250}
            height={250}
            className="w-full max-w-[545px] h-auto"
          />
        </div>

        <div className="w-full max-w-[345px] bg-white rounded-[14px] px-[20px] md:px-[43px] py-[25px] flex flex-col items-center dark:bg-[#242731] dark:text-white transition-all duration-300">
          <h2 className="font-[700] text-[20px] md:text-[24px] text-center">
            2022 Mercedes Benz
          </h2>
          <Image
            src={"/assets/sell-car-graph.png"}
            alt="Car-Image"
            width={250}
            height={250}
            className="w-full max-w-[345px] h-auto"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center my-[30px] gap-4">
        <h1 className="font-[700] text-[30px] dark:text-white">Offers</h1>
        <div className="flex flex-wrap gap-[16px]">
          <BookingDropDown className="text-[#A162F7]" title="New" />
          <BookingDropDown className="text-[#A162F7]" title="Toyota" />
        </div>
      </div>

      <div className="">
        <OffersCard />
        <OffersCard />
      </div>
    </div>
  );
};

export default SellCars;
