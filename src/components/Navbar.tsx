"use client";
import { RiSearchLine } from "react-icons/ri";
import { IoNotificationsOutline } from "react-icons/io5";
import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";
import ThemeToggle from "./themeToggle/ThemeToggle";
import useUserDetails from "@/hooks/useUserDetails";
const Navbar = () => {
  const { profilePhoto } = useUserDetails();

  return (
    <div className="fixed top-0 left-0 sm:left-[250px] w-full sm:w-[calc(100%-250px)] py-4 px-6 flex items-center justify-between bg-white dark:bg-[#242731] dark:text-white transition-all duration-300">
      <div className=" flex items-center gap-x-4 rounded-md py-2 px-4 w-[250px] bg-gray-100 dark:text-white dark:bg-[#1F2128] transition-all duration-300">
        <RiSearchLine className="text-gray-500 dark:text-gray-300 w-5 h-5" />
        <input
          type="text"
          placeholder="Search or type"
          className="text-sm font-medium w-full border-none focus:outline-none bg-transparent "
        />
      </div>

      <div className="flex items-center gap-x-6">
        <ThemeToggle />
        <IoNotificationsOutline className="text-gray-600 dark:text-gray-300 h-6 w-6 cursor-pointer" />
        {profilePhoto ? (
          <Image
            src={profilePhoto}
            alt="Profile"
            width={40}
            height={40}
            className="rounded-full object-cover w-[48px] h-[48px]"
          />
        ) : (
          <FaUserCircle className="text-[#7C7C8D] rounded-full object-cover w-[48px] h-[48px]" />
        )}
      </div>
    </div>
  );
};

export default Navbar;
