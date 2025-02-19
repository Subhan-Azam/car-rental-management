import React from "react";

interface AuthBtnProps {
  title: string;
  loading?: boolean;
}

const AuthBtn: React.FC<AuthBtnProps> = ({ title, loading }) => (
  <button
    type="submit"
    className="w-full py-3 font-[700] text-[20px] bg-[#A162F7] text-white rounded-[10px] hover:bg-purple-700 transition"
  >
    {loading ? "Loading..." : title}
  </button>
);

export default AuthBtn;
