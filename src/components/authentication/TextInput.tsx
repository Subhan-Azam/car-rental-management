"use client";
import React from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoEyeOffOutline } from "react-icons/io5";
import useHideShowPassword from "@/hooks/useHideShowPassword";

interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
  type?: string;
  title?: string;
  placeholder?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  value,
  onChange,
  title,
  placeholder,
  type,
}) => {
  const { isPasswordVisible, togglePasswordVisibility } = useHideShowPassword();

  const inputType =
    type === "password" ? (isPasswordVisible ? "text" : "password") : type;

  return (
    <div className="flex flex-col gap-[12px] relative">
      <label className="font-[500] dark:text-white transition-all duration-300">
        {title}
      </label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type={inputType}
        name={type === "password" ? "password" : "email"}
        placeholder={placeholder}
        className="w-full p-3 pr-11 border border-[#B1B5C3] rounded-[10px] focus:outline-[#A162F7] dark:dark:bg-[#323745] dark:border-none dark:text-white"
        required
      />
      {type === "password" && (
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-3 top-[50px]"
        >
          {isPasswordVisible ? (
            <MdOutlineRemoveRedEye size={20} className=" text-gray-600" />
          ) : (
            <IoEyeOffOutline size={20} className=" text-gray-600" />
          )}
        </button>
      )}
    </div>
  );
};

export default TextInput;
