import React, { useRef } from "react";
import CarInput from "../addCar/CarInput";
import CarDropDown from "../addCar/CarDropDown";
import { Car } from "@/store/slices/carCrudSlice";
import useCarCrud from "@/hooks/useCarCrud";
import { IoCloseOutline, IoCloudUploadOutline } from "react-icons/io5";
import Image from "next/image";
import AuthBtn from "../button/AuthBtn";

interface UpdateModalType {
  car: Car;
  handleIsOpen: () => void;
  handleOverlayClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const UpdateModal = ({ handleIsOpen, handleOverlayClick }: UpdateModalType) => {
  const {
    brand,
    setBrand,
    carName,
    setCarName,
    model,
    setModel,
    mileage,
    setMileage,
    engineType,
    setEngineType,
    transmissionType,
    setTransmissionType,
    price,
    setPrice,
    carType,
    setCarType,
    description,
    setDescription,
    image,
    handleImageChange,
    updateHandler,
  } = useCarCrud();

  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <div
        id="modalRemove"
        onClick={handleOverlayClick}
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
      >
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-lg h-[80vh] flex flex-col relative">
          <div className="bg-[#A162F7] rounded-t-2xl text-white h-20 flex justify-center items-center">
            <button
              onClick={handleIsOpen}
              className="absolute top-4 right-4 text-xl font-bold text-white hover:text-gray-300 transition-all ease-in-out"
            >
              <IoCloseOutline />
            </button>
            <h2 className="text-2xl font-bold text-white font-sans dark:text-white text-center">
              Edit Car Details!
            </h2>
          </div>
          <div
            className="overflow-y-auto flex-1 px-2"
            style={{ maxHeight: "calc(100% - 120px)" }}
          >
            <form className="space-y-4 p-6">
              <CarInput
                type="text"
                placeholder="Enter car name"
                title="Brand Name:"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <CarInput
                  type="text"
                  placeholder="Enter car name"
                  title="Car Name:"
                  value={carName}
                  onChange={(e) => setCarName(e.target.value)}
                />
                <CarInput
                  type="number"
                  placeholder="Enter model year"
                  title="Model Year:"
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                />
              </div>

              <CarInput
                title="Mileage"
                type="text"
                placeholder="Enter mileage"
                value={mileage}
                onChange={(e) => setMileage(e.target.value)}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <CarDropDown
                  value={engineType}
                  onChange={(e) => setEngineType(e.target.value)}
                  options={[
                    "Select Engine Type",
                    "Petrol",
                    "Diesel",
                    "Electric",
                  ]}
                  title="Engine Type"
                />
                <CarDropDown
                  value={transmissionType}
                  onChange={(e) => setTransmissionType(e.target.value)}
                  options={["Transmission Type", "Automatic", "Manual"]}
                  title="Transmission Type"
                />
              </div>

              <CarInput
                type="number"
                placeholder="Enter price"
                title="Price:"
                value={price}
                onChange={(e) => setPrice(e.target.value as string)}
              />

              <CarDropDown
                value={carType}
                onChange={(e) => setCarType(e.target.value)}
                options={[
                  "Car Type",
                  "LuxuryCar",
                  "VintageCar",
                  "FamiliyCar",
                  "OffRoadCar",
                ]}
                title="Car Type"
              />

              <div>
                <label className="block text-[#7C7C8D] mb-2 font-[500] dark:text-[#E0E4E7]">
                  Description:
                </label>

                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  name="description"
                  placeholder="Car Description"
                  className="w-full px-[22px] py-[14px] font-[500] text-[#5F6165] border outline-none focus:outline-[#A162F7] dark:bg-[#1F2128] dark:text-[#7C7C8D] dark:border-[#2C303D] rounded-[10px] transition-all duration-300"
                  rows={3}
                  required
                ></textarea>
              </div>

              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                ref={fileInputRef}
                className="hidden"
                required
              />

              <div
                onClick={handleImageClick}
                className="cursor-pointer w-[200px] h-[100px]"
              >
                {image ? (
                  <Image
                    src={image}
                    width={100}
                    height={100}
                    alt="user photo"
                    className="w-full h-full object-cover rounded-[10px] dark:border-[#2C303D]"
                  />
                ) : (
                  <div className="group w-full h-full border outline-none rounded-[10px] flex justify-center items-center dark:border-[#2C303D] dark:bg-[#777E90]">
                    <IoCloudUploadOutline className="text-[60px] group-hover:scale-125 hover:outline-[#A162F7] transition-all ease-in-out duration-200 text-[#7C7C8D] dark:text-white" />
                  </div>
                )}
              </div>

              <div className="flex justify-between gap-4">
                <AuthBtn
                  onClick={handleIsOpen}
                  style=" font-[600] text-[18px] mt-2 -mb-6 w-full bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white py-2 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-600 transition"
                  title="Cancel"
                />
                <button
                  onClick={updateHandler}
                  className=" font-[600] text-[18px] mt-2 -mb-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                  title="Update"
                >
                  Update
                </button>
                {/* <AuthBtn
                  style=" font-[600] text-[18px] mt-2 -mb-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                  title="Update"
                /> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateModal;
