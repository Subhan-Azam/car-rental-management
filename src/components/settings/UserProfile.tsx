"use client";
import React, { useRef } from "react";
import { FiHome } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { IoIosMale } from "react-icons/io";
import UserInput from "./UserInput";
import useUserDetails from "@/hooks/useUserDetails";
import { FaUserCircle } from "react-icons/fa";
import { Loader } from "../loader/Loader";
import LogoutModal from "../modal/LogoutModal";
import Image from "next/image";

const UserProfile = () => {
  const {
    email,
    city,
    setCity,
    street,
    setStreet,
    dateOfBirth,
    setDateOfBirth,
    gender,
    setGender,
    profilePhoto,
    handleImageChange,
    updateHandler,
    loading,
    errorMessage,
  } = useUserDetails();

  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const fileInputRef = useRef<HTMLInputElement>(null);

  const userInputArray = [
    {
      icon: <FiHome className="w-6 h-6 text-[#7C7C8D]" />,
      title: "Live in",
      type: "text",
      placeholder: loading ? (
        <Loader
          style={
            "ml-7 mt-[2px] w-[15px] h-[15px] border-[1.5px] border-[#A162F7] border-b-transparent rounded-full inline-block animate-spinCustom"
          }
        />
      ) : city ? (
        city
      ) : (
        "empty"
      ),
      readOnly: false,
      value: city,
      onChange: setCity,
    },

    {
      icon: <FiHome className="w-6 h-6 text-[#7C7C8D]" />,
      title: "Street Address",
      type: "text",
      placeholder: loading ? (
        <Loader
          style={
            "ml-7 mt-[2px] w-[15px] h-[15px] border-[1.5px] border-[#A162F7] border-b-transparent rounded-full inline-block animate-spinCustom"
          }
        />
      ) : street ? (
        street
      ) : (
        "empty"
      ),
      readOnly: false,
      value: street,
      onChange: setStreet,
    },

    {
      icon: <HiOutlineMail className="w-6 h-6 text-[#7C7C8D]" />,
      title: "Email Address",
      type: "email",
      placeholder: loading ? (
        <Loader
          style={
            "ml-7 mt-[2px] w-[15px] h-[15px] border-[1.5px] border-[#A162F7] border-b-transparent rounded-full inline-block animate-spinCustom"
          }
        />
      ) : email ? (
        email
      ) : (
        "Email not found"
      ),
      readOnly: true,
    },

    {
      icon: <LiaBirthdayCakeSolid className="w-6 h-6 text-[#7C7C8D]" />,
      title: "Date Of Birth",
      type: "date",
      placeholder: loading ? (
        <Loader
          style={
            "ml-7 mt-[2px] w-[15px] h-[15px] border-[1.5px] border-[#A162F7] border-b-transparent rounded-full inline-block animate-spinCustom"
          }
        />
      ) : dateOfBirth ? (
        new Date(dateOfBirth).toISOString().split("T")[0]
      ) : (
        "empty"
      ),
      readOnly: false,
      value: dateOfBirth ? dateOfBirth.toISOString().split("T")[0] : "",
      onChange: (value: string) => setDateOfBirth(new Date(value)),
    },

    {
      icon: <IoIosMale className="w-6 h-6 text-[#7C7C8D]" />,
      title: "Gender",
      type: "text",
      placeholder: loading ? (
        <Loader
          style={
            "ml-7 mt-[2px] w-[15px] h-[15px] border-[1.5px] border-[#A162F7] border-b-transparent rounded-full inline-block animate-spinCustom"
          }
        />
      ) : gender ? (
        gender
      ) : (
        "empty"
      ),
      readOnly: false,
      value: gender,
      onChange: setGender,
    },
  ];

  return (
    <>
      <div className="mt-12 px-4">
        <div className="mb-6">
          <h1 className="text-[#242731] text-xl md:text-2xl font-bold mb-2">
            Profile
          </h1>
          <p className="text-[#5F6165] text-[16px] md:text-base">
            Update your photo and personal details here.
          </p>
        </div>
        <div className="border-t border-[#E9EAEC]"></div>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <div className="max-w-[788px] flex flex-col gap-6 my-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {userInputArray?.map((item, index) => (
              <UserInput
                key={index}
                icon={item.icon}
                title={item.title}
                placeholder={item.placeholder}
                type={item.type}
                readOnly={item.readOnly}
                value={item.value}
                onChange={item.onChange}
              />
            ))}
          </div>
        </div>
        <div className="border-t border-[#E9EAEC]"></div>
        <div className="flex flex-col md:flex-row items-center justify-between max-w-3xl my-6 gap-6">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-16 w-full">
            <div className="flex flex-col gap-1">
              <h2 className="text-[#242731] font-medium text-[16px]">
                Your Photo
              </h2>
              <p className="text-sm text-[#7C7C8D]">
                This will be displayed on your profile
              </p>
            </div>

            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              accept="image/*"
              onChange={handleImageChange}
            />
            <div
              onClick={handleImageClick}
              className="cursor-pointer w-[80px] h-[80px] "
            >
              {profilePhoto ? (
                <Image
                  src={profilePhoto}
                  width={100}
                  height={100}
                  alt="user photo"
                  className="w-full h-full aspect-[3/2] rounded-full"
                />
              ) : (
                <FaUserCircle className="w-full h-full text-gray-400" />
              )}
            </div>
          </div>
          <div className="flex gap-4">
            <button className="font-medium text-[#7C7C8D] hover:text-red-600">
              Delete
            </button>

            <LogoutModal
              title="Update"
              para="Do you really want to update?"
              onClick={updateHandler}
              className2="font-medium text-[#A162F7] hover:text-purple-700"
            />
          </div>
        </div>
        <div className="border-t border-[#E9EAEC]"></div>
        <div className="flex flex-col md:flex-row justify-between mt-6 gap-6">
          <h2 className="text-[#242731] font-medium">Social Profiles</h2>
          <div className="w-full md:w-2/3 flex flex-col gap-4">
            <div className="max-w-[376px] flex flex-col gap-5">
              <UserInput placeholder="facebook.com/" />
              <UserInput placeholder="twitter.com/" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
