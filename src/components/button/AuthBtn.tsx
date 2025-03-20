import React from "react";
import { Loader } from "../loader/Loader";

interface AuthBtnProps {
  title: string;
  loading?: boolean;
}

const AuthBtn: React.FC<AuthBtnProps> = ({ title, loading }) => (
  <button
    type="submit"
    className="w-full h-[50px] flex justify-center items-center py-3 font-[700] text-[20px] bg-[#A162F7] text-white rounded-[10px] hover:bg-purple-700 transition"
  >
    {loading ? (
      <Loader style="w-8 h-8 border-4 border-white border-b-transparent rounded-full inline-block animate-spinCustom" />
    ) : (
      title
    )}
  </button>
);

export default AuthBtn;
