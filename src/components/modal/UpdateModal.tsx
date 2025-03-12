import React from "react";
import CarInput from "../addCar/CarInput";
import CarDropDown from "../addCar/CarDropDown";
import useUpdateCar from "@/hooks/useUpdateCar";
import { Car } from "@/store/slices/carCrudSlice";

interface UpdateModalType {
  car: Car;
  handleIsOpen: () => void;
  handleOverlayClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const UpdateModal = ({
  handleIsOpen,
  handleOverlayClick,
  car,
}: UpdateModalType) => {
  const { exsistingCar } = useUpdateCar({ item: car });

  return (
    <>
      <div
        id="modalRemove"
        onClick={handleOverlayClick}
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      >
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          <h2 className="text-xl font-semibold mb-4">
            {exsistingCar?.carName}
          </h2>
          <form>
            <CarInput type="text" placeholder="Name" />
            <CarInput type="text" placeholder="Name" />
            <CarInput type="text" placeholder="Name" />
            <CarDropDown
              options={["Select Engine Type", "Petrol", "Diesel", "Electric"]}
            />
            <CarDropDown
              options={["Transmission Type", "Automatic", "Manual"]}
            />
            <CarInput type="text" placeholder="Name" />
            <CarInput type="text" placeholder="Name" />

            <input
              type="file"
              accept="image/*"
              //   onChange={handleImageChange}
              className="dark:bg-[#1F2128] text-[#7C7C8D] rounded-[10px] transition-all duration-300"
              required
            />

            {/* <textarea
              placeholder="Car Description"
              className="w-full px-[22px] py-[14px] font-[500] text-[#5F6165] border outline-none focus:outline-[#A162F7] dark:bg-[#1F2128] dark:text-[#7C7C8D] dark:border-[#2C303D] rounded-[10px] transition-all duration-300"
              rows={1}
              required
            ></textarea> */}

            {/* <input
              type="text"
              name="model"
              placeholder="Model"
              className="w-full p-2 border rounded mb-2"
            />
            <input
              type="text"
              name="mileage"
              placeholder="Mileage"
              className="w-full p-2 border rounded mb-2"
            />
            <input
              type="text"
              name="engine"
              placeholder="Engine"
              className="w-full p-2 border rounded mb-2"
            />
            <input
              type="text"
              name="transmission"
              placeholder="Transmission"
              className="w-full p-2 border rounded mb-2"
            />
            <input
              type="text"
              name="price"
              placeholder="Price"
              className="w-full p-2 border rounded mb-2"
            />
            <textarea
              name="description"
              placeholder="Description"
              className="w-full p-2 border rounded mb-2"
            ></textarea>
            <input
              type="text"
              name="imageUrl"
              placeholder="Image URL"
              className="w-full p-2 border rounded mb-2"
            /> */}
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
