"use client";
import PageChange from "@/components/PageChange/PageChange";
import AuthBtn from "@/components/button/AuthBtn";
import TextInput from "@/components/textInput/TextInput";
import useForgetPassword from "@/hooks/useForgetPassword";
import React from "react";

const ForgetPassword = () => {
  const { email, setEmail, handleForgetPass, forgetError } =
    useForgetPassword();
  return (
    <div className="flex justify-center h-full py-7 mx-3">
      <div>
        <PageChange
          title="Reset Your Password"
          link="/auth/login"
          signUp="Login"
          para="Remember your password?"
        />

        <form onSubmit={handleForgetPass}>
          <div className="w-[506px] h-auto p-8 bg-white shadow-lg border border-[#F4F5F6] rounded-[10px]">
            <TextInput
              value={email}
              onChange={setEmail}
              title="Email"
              placeholder="Enter your email"
              type="email"
            />
            {forgetError && <p className="text-red-600">{forgetError}</p>}
          </div>
          <div className="mt-10">
            <AuthBtn title="Reset Password" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
