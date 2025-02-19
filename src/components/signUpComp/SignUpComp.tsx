"use client";
import React from "react";
import AuthBtn from "@/components/button/AuthBtn";
import LoginWithSocialMedia from "@/components/button/LoginWithSocialMedia";
import ForgetPassWithCheckBox from "@/components/forgetPassWithCheckBox/ForgetPassWithCheckBox";
import OrSec from "@/components/orSec/OrSec";
import TextInput from "@/components/textInput/TextInput";
import useSignUp from "@/hooks/useSignUp";
import PageChange from "@/components/PageChange/PageChange";

const SignUpComp = () => {
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    password,
    setPassword,
    loading,
    authError,
    handleSubmit,
  } = useSignUp();

  const InputsArray = [
    {
      value: firstName,
      onChange: setFirstName,
      type: "text",
      title: "First Name",
      placeholder: "Abcd",
    },
    {
      value: lastName,
      onChange: setLastName,
      type: "text",
      title: "Last Name",
      placeholder: "xyz",
    },
    {
      value: email,
      onChange: setEmail,
      type: "email",
      title: "Email",
      placeholder: "abcd@example.com",
    },
    {
      value: password,
      onChange: setPassword,
      type: "password",
      title: "Password",
      placeholder: "******",
    },
  ];

  return (
    <div className="flex justify-center h-full py-7 mx-3">
      <div className="max-w-[508px] w-full">
        <PageChange
          title="Get started"
          link="/auth/login"
          signUp="Login"
          para="Already have an account!"
        />

        <div className="flex flex-wrap justify-center gap-4">
          <LoginWithSocialMedia
            title="Sign in with Google"
            className="bg-white text-black"
          />
          <LoginWithSocialMedia
            title="Sign in with Facebook"
            className="bg-[#4776D0] text-white"
          />
        </div>

        <OrSec />
        <form onSubmit={handleSubmit}>
          <div className="w-full max-w-[506px] h-auto p-8 bg-white shadow-lg border border-[#F4F5F6] rounded-[10px]">
            <div className="space-y-[14px]">
              {InputsArray?.map((textInput, index) => (
                <TextInput
                  key={index}
                  value={textInput.value}
                  onChange={textInput.onChange}
                  title={textInput.title}
                  placeholder={textInput?.placeholder}
                  type={textInput?.type}
                />
              ))}
            </div>
          </div>
          <ForgetPassWithCheckBox />

          {authError && <p className="text-red-500 text-sm">{authError}</p>}
          <AuthBtn loading={loading} title="Sign Up" />
        </form>
      </div>
    </div>
  );
};

export default SignUpComp;
