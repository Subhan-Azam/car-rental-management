"use client";
import CarDropDown from "@/components/addCar/CarDropDown";
import CarInput from "@/components/addCar/CarInput";
import AuthBtn from "@/components/button/AuthBtn";
import useAddCar from "@/hooks/useAddCar";
import Image from "next/image";
import { FaCircleInfo } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";

const AddCar = () => {
  const { pictures, handleImageSelect, removeImage } = useAddCar();
  return (
    <div className="bg-white p-7 rounded-md">
      <div className="mb-6">
        <h1 className="text-[#242731] text-xl md:text-2xl font-bold mb-2">
          Profile
        </h1>
        <p className="text-[#5F6165] text-[16px] md:text-base">
          Update your photo and personal details here.
        </p>
      </div>
      <form className="max-w-[788px] flex flex-col gap-6 my-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CarInput
            type="text"
            placeholder="Enter car name"
            title="Car Name:"
          />
          <CarInput
            type="number"
            placeholder="Enter car name"
            title="Model Year:"
          />
        </div>

        <CarInput type="text" placeholder="Enter car name" title="Mileage" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CarDropDown
            title="Engine Type"
            option1="Select Engine Type"
            option2="Petrol"
            option3="Diesel"
            option4="Electric"
          />
          <CarDropDown
            title="Transmission Type"
            option1="Select Transmission"
            option2="Automatic"
            option3="Manual"
          />
        </div>

        <CarInput type="number" placeholder="Enter car name" title="Price:" />

        <textarea
          name="description"
          placeholder="Car Description"
          className="w-full p-2 border focus:outline-[#A162F7] rounded"
          rows={3}
          required
        ></textarea>

        <input
          type="file"
          accept="image/*"
          onChange={handleImageSelect}
          className="mt-2"
          disabled={pictures.length >= 5}
        />

        {/* Show Selected Images with Delete Icon */}
        <div className="mt-4 flex gap-2 flex-wrap">
          {pictures.map((pic, index) => (
            <div key={index} className="relative">
              <Image
                src={pic}
                alt="Selected Car"
                width={50}
                height={50}
                className="w-24 h-24 object-cover rounded-full border"
              />

              {/* Delete Button (Cross Icon) */}
              <button
                onClick={() => removeImage(index)}
                className="absolute top-0 right-0 bg-white text-sm p-1 rounded-full transform translate-x-1 -translate-y-1"
              >
                <MdCancel size={22} className="text-red-500 hover:text-red-600" />
              </button>
            </div>
          ))}
        </div>

        {/* Message when max limit is reached */}
        {pictures.length >= 5 && (
          <div className="text-blue-500 flex items-center gap-1 mt-2">
            <FaCircleInfo />
            Maximum 5 images allowed.
          </div>
        )}
        <AuthBtn title="Submit" />
      </form>
    </div>
  );
};

export default AddCar;
