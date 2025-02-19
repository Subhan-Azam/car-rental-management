import React from "react";
import { MdFacebook } from "react-icons/md";
import { FaGoogle } from "react-icons/fa";

interface LoginWithSocialMediaProps {
  className?: string;
  title?: string;
}
const LoginWithSocialMedia: React.FC<LoginWithSocialMediaProps> = ({
  className,
  title,
}) => {
  return (
    <>
      <button
        className={`${className} w-[246px] h-[60px] flex items-center gap-3 p-2.5 text-[15px] font-[500] text-center uppercase border border-gray-300 rounded-md transition-transform duration-500 hover:scale-105`}
      >
        {title === "Sign in with Google" ? (
          <FaGoogle size={24} />
        ) : (
          <MdFacebook size={23} />
        )}
        {title}
      </button>
    </>
  );
};

export default LoginWithSocialMedia;
