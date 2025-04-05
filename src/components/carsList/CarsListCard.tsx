"use client";
import Image from "next/image";
import React from "react";
import useCarCrud from "@/hooks/useCarCrud";
import CarCrudBtn from "../button/CarCrudBtn";
import useModel from "@/hooks/useModel";
import UpdateModal from "../modal/UpdateModal";
import { useAppDispatch } from "@/store/store";
import { setUpdateCarData } from "@/store/slices/carCrudSlice";
import { Loader } from "../loader/Loader";

const CarsListCard = () => {
  const { cars, deleteHandler, loading, error } = useCarCrud();

  const { isOpen, handleIsOpen, handleOverlayClick } = useModel();
  const dispatch = useAppDispatch();

  return (
    <div className="space-y-4">
      {loading ? (
        <div className="flex justify-center w-full mt-20">
          <Loader style="w-8 h-8 border-4 border-[#A162F7] border-b-transparent rounded-full inline-block animate-spinCustom" />
        </div>
      ) : error ? (
        <div className="text-red-500 font-bold text-xl">{error}</div>
      ) : (
        <>
          {cars?.map((car) => (
            <div key={car.id}>
              <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 sm:space-x-4 p-4 bg-white shadow-md rounded-[16px] hover:bg-gray-100">
                {/* Car Image and Text Section */}
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
                  <div className="min-w-[100px]">
                    <h2 className="text-xl font-bold text-gray-900">
                      {car?.carName}
                    </h2>
                  </div>
                  <Image
                    src={car?.imageUrl}
                    alt="car-image"
                    width={150}
                    height={100}
                    className="w-full sm:w-[150px] h-[100px] rounded-[16px] border-2 aspect-[3/2] border-gray-300"
                  />
                  <div className="text-center sm:text-left">
                    <div className="flex text-sm text-gray-600 gap-2">
                      <p className="font-bold">Model:</p>
                      <p className="">{car?.model}</p>
                    </div>
                    <div className="flex text-sm text-gray-600 gap-2">
                      <p className="font-bold">Engine:</p>
                      <p>
                        {car?.engine.slice(0, 1).toUpperCase()}
                        {car?.engine.slice(1).toLowerCase()}
                      </p>
                    </div>

                    <div className="flex text-sm text-gray-600 gap-2">
                      <p className="font-bold">Price:</p>
                      <p className="">{car?.price}</p>
                    </div>
                    <div className="flex text-sm text-gray-600 gap-2">
                      <p className="font-bold">Description:</p>
                      <p className="">{car?.description.slice(0, 50)}...</p>
                    </div>
                  </div>
                </div>

                {/* Buttons Section */}
                <div className="flex flex-col sm:flex-row mt-4 sm:mt-0 space-x-0 sm:space-x-2">
                  <CarCrudBtn
                    title="Update"
                    onclick={() => {
                      handleIsOpen();
                      dispatch(setUpdateCarData(car));
                    }}
                    style={"bg-blue-500 hover:bg-blue-600 sm:w-[100px] w-full"}
                  />

                  <CarCrudBtn
                    title="Delete"
                    onclick={() => deleteHandler(car?.id)}
                    style={"bg-red-500 hover:bg-red-600 sm:w-[100px] w-full"}
                  />
                </div>
              </div>

              {/* Update Modal */}
              {isOpen && (
                <UpdateModal
                  car={car}
                  handleIsOpen={handleIsOpen}
                  handleOverlayClick={handleOverlayClick}
                />
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default CarsListCard;
