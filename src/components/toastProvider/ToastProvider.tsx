"use client"; // Only if using in a client component

import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ToastProviderType {
  children: ReactNode;
}

const ToastProvider = ({ children }: ToastProviderType) => {
  return (
    <>
      {children}
      <ToastContainer position="bottom-right" autoClose={4000} />
    </>
  );
};

export default ToastProvider;
