import React from "react";
import CarInput from "../addCar/CarInput";
import CarDropDown from "../addCar/CarDropDown";
import { Car } from "@/store/slices/carCrudSlice";
import useCarCrud from "@/hooks/useCarCrud";

interface UpdateModalType {
  car: Car;
  handleIsOpen: () => void;
  handleOverlayClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const UpdateModal = ({ handleIsOpen, handleOverlayClick }: UpdateModalType) => {
  const {
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
    // carType,
    // setCarType,
    description,
    setDescription,
    handleImageChange,
    updateHandler,
  } = useCarCrud();

  return (
    <>
      <div
        id="modalRemove"
        onClick={handleOverlayClick}
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25"
      >
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          <h2 className="text-xl font-semibold mb-4">Update Car</h2>
          <form onSubmit={updateHandler}>
            <CarInput
              value={carName}
              onChange={(e) => setCarName(e.target.value as string)}
              type="text"
            />
            <CarInput
              value={model}
              onChange={(e) => setModel(e.target.value as string)}
              type="text"
            />
            <CarInput
              value={mileage}
              onChange={(e) => setMileage(e.target.value as string)}
              type="text"
            />
            <CarDropDown
              value={engineType}
              onChange={(e) => setEngineType(e.target.value as string)}
              options={["Select Engine Type", "Petrol", "Diesel", "Electric"]}
            />
            <CarDropDown
              value={transmissionType}
              onChange={(e) => setTransmissionType(e.target.value as string)}
              options={["Transmission Type", "Automatic", "Manual"]}
            />
            <CarInput
              value={price}
              onChange={(e) => setPrice(e.target.value as string)}
              type="text"
            />
            <CarInput
              value={description}
              onChange={(e) => setDescription(e.target.value as string)}
              type="text"
            />

            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="dark:bg-[#1F2128] text-[#7C7C8D] rounded-[10px] transition-all duration-300"
              // required
            />

            <div className="flex justify-between mt-4">
              <button
                type="button"
                onClick={handleIsOpen}
                className="bg-gray-400 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateModal;
