"use client";
import { RiSearchLine } from "react-icons/ri";
import { IoNotificationsOutline } from "react-icons/io5";
import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";
import ThemeToggle from "./themeToggle/ThemeToggle";
import useSearchBar from "@/hooks/useSearchBar";
import Link from "next/link";
const Navbar = () => {
  const {
    profilePhoto,
    searchTerm,
    setSearchTerm,
    isDropDownOpen,
    setIsDropDownOpen,
    suggestions,
  } = useSearchBar();

  return (
    <div className="fixed top-0 left-0 sm:left-[250px] w-full sm:w-[calc(100%-250px)] py-4 px-6 flex items-center justify-between bg-white dark:bg-[#242731] dark:text-white transition-all duration-300">
      <div className=" flex items-center gap-x-4 rounded-md py-2 px-4 w-[250px] bg-gray-100 dark:text-white dark:bg-[#1F2128] transition-all duration-300">
        <RiSearchLine className="text-gray-500 dark:text-gray-300 w-5 h-5" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setIsDropDownOpen(true);
          }}
          placeholder="Search or type"
          className="text-sm font-medium w-full border-none focus:outline-none bg-transparent"
        />
      </div>

      {/* Dropdown suggestions */}
      {isDropDownOpen && searchTerm && (
        <ul className="absolute top-[100%] left-0 w-full mt-1 bg-white dark:bg-[#1F2128] border border-gray-200 dark:border-[#333] rounded-md shadow-lg z-50">
          {suggestions
            ?.filter((item) =>
              item?.carName
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
            )
            .map((item) => (
              <Link href={`/dashboard/assets/${item?.id}`} key={item?.id}>
                <li
                  onClick={() => {
                    setSearchTerm(item?.carName);
                    setIsDropDownOpen(false);
                  }}
                  className="px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-[#2a2d36] cursor-pointer"
                >
                  {item?.carName}
                </li>
              </Link>
            ))}

          {suggestions.filter((item) =>
            item?.carName
              ?.toLowerCase()
              .includes(searchTerm.toLowerCase())
          ).length === 0 && (
            <li className="px-4 py-2 text-sm text-gray-400 dark:text-gray-500">
              No results found
            </li>
          )}
        </ul>
      )}

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
