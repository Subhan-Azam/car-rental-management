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
        <div className="flex justify-center w-full">
          <Loader style="w-8 h-8 border-4 border-[#A162F7] border-b-transparent rounded-full inline-block animate-spinCustom" />
        </div>
      ) : error ? (
        <div className="text-red-500 font-bold text-xl">{error}</div>
      ) : (
        <>
          {cars?.map((car) => (
            <div key={car.id}>
              <div className="border rounded-lg p-4 shadow-lg bg-white flex items-center space-x-4">
                <Image
                  src={car?.imageUrl}
                  alt="car-image"
                  width={100}
                  height={100}
                />

                <div>
                  <h2 className="text-xl font-semibold">{car?.carName}</h2>
                  <p className="text-gray-600">{car?.model}</p>
                  <p className="text-gray-600">{car?.price}</p>
                  <div className="mt-2 flex space-x-2">
                    <CarCrudBtn
                      title="Update"
                      onclick={() => {
                        handleIsOpen();
                        dispatch(setUpdateCarData(car));
                      }}
                      style={"bg-blue-500 hover:bg-blue-600"}
                    />

                    <CarCrudBtn
                      title="Delete"
                      onclick={() => deleteHandler(car?.id)}
                      style={"bg-red-500 hover:bg-red-600"}
                    />
                  </div>
                </div>
              </div>

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
