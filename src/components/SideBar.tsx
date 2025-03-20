"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { RxDashboard } from "react-icons/rx";
import { BiCar } from "react-icons/bi";
import { HiOutlineCalendar, HiOutlineShoppingBag } from "react-icons/hi";
import { GiCrossedSabres } from "react-icons/gi";
import { LuMessageSquareText } from "react-icons/lu";
import { SlSettings } from "react-icons/sl";
import { AiOutlinePlusCircle } from "react-icons/ai";
import NavbarMainLogo from "../../public/assets/Heading.png";
import LogoutModal from "./modal/LogoutModal";
import { signOut, useSession } from "next-auth/react";

const SideBar = () => {
  const session = useSession();

  const links =
    session.data?.user.role === "ADMIN"
      ? [
          {
            href: "/dashboard",
            icon: <RxDashboard />,
            label: "Dashboard",
          },
          {
            href: "/dashboard/addCar",
            icon: <AiOutlinePlusCircle />,
            label: "Add Car",
          },
          {
            href: "/dashboard/booking",
            icon: <BiCar />,
            label: "Booking",
          },
          {
            href: "/dashboard/sellCars",
            icon: <HiOutlineShoppingBag />,
            label: "Sell Cars",
          },

          {
            href: "/dashboard/services",
            icon: <GiCrossedSabres />,
            label: "Services",
          },
          {
            href: "/dashboard/calender",
            icon: <HiOutlineCalendar />,
            label: "Calendar",
          },
          {
            href: "/dashboard/messages",
            icon: <LuMessageSquareText />,
            label: "Messages",
          },
        ]
      : [
          // {
          //   href: "/dashboard/assets",
          //   icon: <TbSteeringWheel />,
          //   label: "Assets",
          // },
          {
            href: "/dashboard/booking",
            icon: <BiCar />,
            label: "Booking",
          },
          {
            href: "/dashboard/messages",
            icon: <LuMessageSquareText />,
            label: "Messages",
          },
        ];
  return (
    <aside className="pt-1 flex flex-col justify-between w-[60px] sm:w-[250px] h-screen fixed left-0 top-0 bg-white dark:bg-[#242731] dark:text-white transition-all duration-300">
      <div>
        <div className="flex items-center p-6">
          <Image
            src={NavbarMainLogo}
            className="hidden sm:block"
            alt="Navbar Logo does not show"
          />
        </div>
        <div className="px-3 pb-4 pt-5">
          <ul className="space-y-2 font-medium">
            {links.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex items-center gap-x-2 p-2 rounded-lg hover:bg-gray-100 active:bg-gray-200 focus:bg-[#F3F5F8] text-[#5F6165] dark:hover:bg-[#292E3D] dark:focus:bg-[#292E3D] dark:text-[#808191]"
                >
                  <span className="w-[20px]">{item.icon}</span>
                  <span className="text-sm font-medium sm:block hidden">
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="px-3 pb-4">
        <ul>
          <li>
            <Link
              href="/dashboard/settings"
              className="flex items-center gap-x-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#292E3D] focus:bg-[#F3F5F8] dark:focus:bg-[#292E3D]"
            >
              <SlSettings className="text-gray-600 w-[20px] dark:text-[#808191]" />
              <span className="text-sm font-medium hidden sm:block dark:text-[#808191]">
                Settings
              </span>
            </Link>
          </li>

          <li className="mb-10">
            <LogoutModal
              onClick={() => signOut()}
              title="Logout"
              para="Do you really want to logout?"
              className1="cursor-pointer flex items-center gap-x-2 p-2 w-full rounded-lg hover:bg-gray-100 dark:focus:bg-[#292E3D] dark:hover:bg-[#292E3D]"
              className2="text-sm font-medium hidden sm:block dark:text-[#808191] "
            />
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
