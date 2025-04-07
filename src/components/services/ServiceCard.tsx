import React from "react";

interface ServicesSmallCardPropsTypes {
  className?: string;
  title?: string;
}

const ServicesSmallCard: React.FC<ServicesSmallCardPropsTypes> = ({
  className,
  title,
}) => {
  return (
    <div
      className={` ${className} dark:bg-[#242731] dark:shadow[0px_8px_24px_rgba(255, 126, 134, 0.3)] bg-white rounded-[4px] grid place-items-center w-[50px] py-[22px] `}
    >
      <h2
        className={`${className}  text-[#72767C] leading-[26.04px] text-[20px] font-bold`}
      >
        {title}
      </h2>
    </div>
  );
};

export default ServicesSmallCard;