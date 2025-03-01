import React from "react";
import { BtnLoader } from "../loader/Loader";

interface AuthBtnProps {
  title: string;
  loading?: boolean;
}

const AuthBtn: React.FC<AuthBtnProps> = ({ title, loading }) => (
  <button
    type="submit"
    className="w-full h-[50px] flex justify-center items-center py-3 font-[700] text-[20px] bg-[#A162F7] text-white rounded-[10px] hover:bg-purple-700 transition"
  >
    {loading ? <BtnLoader /> : title}
  </button>
);

export default AuthBtn;
