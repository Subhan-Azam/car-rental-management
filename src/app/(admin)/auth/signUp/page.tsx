import SignUpComp from "@/components/authentication/SignUpComp";
import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

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
