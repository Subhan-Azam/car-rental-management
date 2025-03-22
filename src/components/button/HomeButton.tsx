import React from "react";

interface HomeButtonType {
  title?: string;
  style: string;
  carType?: string;
  onClick?: () => void;
}
const HomeButton = ({ title, carType, style, onClick }: HomeButtonType) => {
  return (
    <>
      <button onClick={onClick} className={`${style}`}>
        {title ||
          (carType
            ? carType.charAt(0).toUpperCase() + carType.slice(1).toLowerCase()
            : "")}
      </button>
    </>
  );
};

export default HomeButton;
