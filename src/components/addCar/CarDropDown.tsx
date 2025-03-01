import React from "react";

interface CarDropDownProps {
  title: string;
  option1: string;
  option2: string;
  option3: string;
  option4?: string;
}
const CarDropDown = ({
  title,
  option1,
  option2,
  option3,
  option4,
}: CarDropDownProps) => {
  return (
    <>
      <div>
        <label className="block text-[#7C7C8D] font-[500] mb-2">{title}</label>
        <select
          name="transmission"
          className="w-full p-2 border rounded"
          required
        >
          <option value="">{option1}</option>
          <option value="Automatic">{option2}</option>
          <option value="Manual">{option3}</option>
          <option value="Manual">{option4}</option>
        </select>
      </div>
    </>
  );
};

export default CarDropDown;
