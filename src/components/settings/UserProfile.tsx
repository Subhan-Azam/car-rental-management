"use client";
import React from "react";
import { FiHome } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { IoIosMale } from "react-icons/io";
import UserInput from "./UserInput";
import useUserDetails from "@/hooks/useUserDetails";
import { FaUserCircle } from "react-icons/fa";
import { InputLoader } from "../loader/Loader";

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
    // profilePhoto,
    // setProfilePhoto,
    updateHandler,
    loading,
    errorMessage,
  } = useUserDetails();

  const userInputArray = [
    {
      icon: <FiHome className="w-6 h-6 text-[#7C7C8D]" />,
      title: "Live in",
      type: "text",
      placeholder: loading ? <InputLoader /> : city ? city : "empty",
      readOnly: false,
      value: city,
      onChange: setCity,
    },
    {
      icon: <FiHome className="w-6 h-6 text-[#7C7C8D]" />,
      title: "Street Address",
      type: "text",
      placeholder: loading ? <InputLoader /> : street ? street : "empty",
      readOnly: false,
      value: street,
      onChange: setStreet,
    },
    {
      icon: <HiOutlineMail className="w-6 h-6 text-[#7C7C8D]" />,
      title: "Email Address",
      type: "email",
      placeholder: loading ? (
        <InputLoader />
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
        <InputLoader />
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
      placeholder: loading ? <InputLoader /> : gender ? gender : "empty",
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
            <button className="w-16 h-16 rounded-full">
              <FaUserCircle size={"full"} color="#7C7C8D" />
            </button>
          </div>
          <div className="flex gap-4">
            <button className="font-medium text-[#7C7C8D] hover:text-red-600">
              Delete
            </button>
            <button
              onClick={updateHandler}
              className="font-medium text-[#A162F7] hover:text-purple-700"
            >
              Update
            </button>
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

{
  /* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <UserInput
            icon={<FiHome className="w-6 h-6 text-[#7C7C8D]" />}
            title="Live in"
            placeholder={userDetails?.city || "City Address"}
          />
          <UserInput
            icon={<FiHome className="w-6 h-6 text-[#7C7C8D]" />}
            title="Street Address"
            placeholder={userDetails?.street || "Street Address"}
          />
        </div>
        <UserInput
          icon={<HiOutlineMail className="w-6 h-6 text-[#7C7C8D]" />}
          title="Email Address"
          placeholder={userDetails?.email}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <UserInput
            icon={<LiaBirthdayCakeSolid className="w-6 h-6 text-[#7C7C8D]" />}
            title="Date Of Birth"
            placeholder={userDetails?.dateOfBirth}
          />
          <UserInput
            icon={<IoIosMale className="w-6 h-6 text-[#7C7C8D]" />}
            title="Gender"
            placeholder={userDetails?.gender || "Select Gender"}
          />
        </div> */
}
