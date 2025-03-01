"use client";
import PageChange from "@/components/authentication/PageChange";
import AuthBtn from "@/components/button/AuthBtn";
import TextInput from "@/components/authentication/TextInput";
import useForgetPassword from "@/hooks/useForgetPassword";
import React from "react";

const NewPassword = () => {
  const {
    newPassword,
    setNewPassword,
    forgetError,
    loading,
    handleNewPassword,
  } = useForgetPassword();
  return (
    <div className="flex justify-center h-full py-7 mx-3">
      <div>
        <PageChange
          title="Create New Password"
          link="/auth/login"
          signUp="Login"
          para="Remembered your password?"
        />

        <form onSubmit={handleNewPassword}>
          <div className="w-[506px] h-auto p-8 bg-white shadow-lg border border-[#F4F5F6] rounded-[10px]">
            <TextInput
              value={newPassword}
              onChange={setNewPassword}
              title="New Password"
              placeholder="Enter your new password"
              type="password"
            />
            {forgetError && <p className="text-red-600">{forgetError}</p>}
          </div>
          <div className="mt-10">
            <AuthBtn loading={loading} title="Reset Password" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewPassword;
