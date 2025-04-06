import EventCalendar from "@/components/calender/EventCalendar";
import MiniCustomCalendar from "@/components/calender/MiniCustomCalendar";
// import FilterBtn from "@/components/calender/FilterBtn";
// import FullCustomCalendar from "@/components/calender/FullCustomCalendar";

const Calender = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
      <div className="flex flex-col gap-y-6">
        <h1 className="dark:text-white text-[#242731] text-2xl font-bold mb-1 lg:text-left">
          Calendar
        </h1>
        <MiniCustomCalendar />
        <EventCalendar />
      </div>

      {/* Right Section */}
      <div>
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-6">
          {/* <FilterBtn heading="Toyota" />
          <FilterBtn heading="Time" />
          <FilterBtn heading="Status" /> */}
        </div>

        {/* <FullCustomCalendar /> */}
      </div>
    </div>
  );
};

export default Calender;
