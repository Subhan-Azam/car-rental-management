"use client";
import React from "react";

interface CarCrudBtnType {
  title: string;
  style: string;
  onclick?: () => void;
}
const CarCrudBtn = ({ title, onclick, style }: CarCrudBtnType) => {
  return (
    <>
      <button
        onClick={onclick}
        className={`${style} text-white px-4 py-2 rounded`}
      >
        {title}
      </button>
    </>
  );
};

export default CarCrudBtn;
