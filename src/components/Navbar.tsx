import { RiSearchLine } from "react-icons/ri";
import { IoNotificationsOutline } from "react-icons/io5";
import Image from "next/image";
import profileImg from "../../public/assets/current-user.png";
import ThemeToggle from "./themeToggle/ThemeToggle";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 sm:left-[250px] w-full sm:w-[calc(100%-250px)] py-4 px-6 flex items-center justify-between bg-white dark:bg-[#242731] dark:text-white transition-all duration-300">
      {/* Search Box */}
      <div className=" flex items-center gap-x-4 rounded-md py-2 px-4 w-[250px] bg-gray-100 dark:text-white dark:bg-[#1F2128] transition-all duration-300">
        <RiSearchLine className="text-gray-500 dark:text-gray-300 w-5 h-5" />
        <input
          type="text"
          placeholder="Search or type"
          className="text-sm font-medium w-full border-none focus:outline-none bg-transparent "
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-x-6">
        <ThemeToggle />
        <IoNotificationsOutline className="text-gray-600 dark:text-gray-300 h-6 w-6 cursor-pointer" />
        <Image
          src={profileImg}
          alt="Profile"
          width={40}
          height={40}
          className="rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default Navbar;



// import React from "react";
// import { RiSearchLine } from "react-icons/ri";
// import { IoNotificationsOutline } from "react-icons/io5";
// import Image from "next/image";
// import profileImg from "../../public/assets/current-user.png";
// import ThemeToggle from "./themeToggle/ThemeToggle";

// const Navbar = () => {
//   return (
//     <>
//       <div className="fixed top-0 left-0 sm:left-[250px] w-full sm:w-[calc(100%-250px)] bg-white py-4 px-6 flex items-center justify-between">
//         <div className="bg-gray-100 flex items-center gap-x-4 rounded-md py-2 px-4 w-[250px]">
//           <RiSearchLine className="text-gray-500 w-5 h-5" />
//           <input
//             type="text"
//             placeholder="Search or type"
//             className="bg-gray-100 text-sm font-medium w-full border-none focus:outline-none"
//           />
//         </div>

//         <div className="flex items-center gap-x-6">
//           <ThemeToggle />
//           <IoNotificationsOutline className="text-gray-600 h-6 w-6 cursor-pointer" />

//           <Image
//             src={profileImg}
//             alt="Profile"
//             width={40}
//             height={40}
//             className="rounded-full object-cover"
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;
