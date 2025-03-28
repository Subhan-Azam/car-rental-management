import Image from "next/image";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import HomeButton from "../button/HomeButton";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const HomeNavbar = () => {
  const session = getServerSession(authOptions);

  return (
    <div className="flex justify-between items-center px-[12px] md:px-[112px] py-[46px]">
      <button className="hidden md:block">
        <RxHamburgerMenu color="white" size={41} />
      </button>
      <Image
        src={"/assets/home-heading.png"}
        alt="heading"
        width={100}
        height={100}
        className="w-[178px]"
      />

      <Link href={!session ? "/auth/login" : "/dashboard"}>
        <HomeButton
          title={!session ? "Login / Register" : "Dashboard"}
          style="w-[168px] h-[40px] pt-[6px] text-center border border-[#FFFFFF80] rounded-[48px] text-[#FFFFFF] font-[600] text-[16px]"
        />
      </Link>
    </div>
  );
};

export default HomeNavbar;
