import SignUpComp from "@/components/authentication/SignUpComp";
import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/authOption";

const SignUp = async () => {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/dashboard");
  }
  return (
    <div>
      <SignUpComp />
    </div>
  );
};

export default SignUp;
