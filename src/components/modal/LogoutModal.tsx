"use client";
import { TbLogout2 } from "react-icons/tb";
import LogoutBtn from "../button/LogoutBtn";
import useModel from "@/hooks/useModel";

const LogoutModal = () => {
  const { isOpen, handleIsOpen, handleOverlayClick } = useModel();

  return (
    <>
      <button
        onClick={handleIsOpen}
        className="cursor-pointer flex items-center gap-x-2 p-2 w-full rounded-lg hover:bg-gray-100"
      >
        <TbLogout2 className="text-gray-600 w-[20px]" />
        <span className="text-sm font-medium hidden sm:block">Logout</span>
      </button>
      {isOpen && (
        <div
          id="modalRemove"
          onClick={handleOverlayClick}
          className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
        >
          <div className="bg-white rounded-lg shadow-lg w-[90%] sm:w-[350px] p-6 relative">
            <button
              onClick={handleIsOpen}
              className="absolute top-3 right-4 text-gray-500 hover:text-gray-800 text-xl"
            >
              &times;
            </button>

            <h2 className="text-lg font-semibold text-gray-800">
              Are you sure?
            </h2>
            <p className="text-gray-600 mt-2">Do you really want to logout?</p>

            <div className="mt-5 flex justify-end gap-3">
              <button
                onClick={handleIsOpen}
                className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg text-sm"
              >
                Cancel
              </button>
              <LogoutBtn />
              {/* <button className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg text-sm">
                logout
              </button> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LogoutModal;
