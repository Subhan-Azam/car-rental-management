"use client";
import React from "react";

interface CarCrudBtnType {
  title?: string;
  style: string;
  onClick?: () => void;
}
const CarCrudBtn = ({ title, onClick, style }: CarCrudBtnType) => {
  return (
    <>
      <button onClick={onClick} className={`${style}`}>
        {title}
      </button>
    </>
  );
};

export default CarCrudBtn;
