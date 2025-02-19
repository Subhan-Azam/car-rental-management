import { userForgetPassword, userNewPassword } from "@/store/slices/authSlice";
import { useAppDispatch } from "@/store/store";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const useForgetPassword = () => {
  const [email, setEmail] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [forgetError, setForgetError] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const params = searchParams.get("token");
  const dispatch = useAppDispatch();

  const handleForgetPass = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setForgetError(null);
    try {
      const result = await dispatch(userForgetPassword(email)).unwrap();
      console.log("Password reset result:", result);
    } catch (error) {
      console.log("Error in useForgetPassword:", error);
      setForgetError("Something went wrong. Please try again.");
    } finally {
      setForgetError(null);
    }
  };

  const handleNewPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setForgetError(null);
    try {
      console.log("params======", params);
      if (!params) {
        setForgetError("Invalid or missing reset token.");
        return;
      }

      const result = await dispatch(
        userNewPassword({ newPassword, token: params })
      ).unwrap();
      console.log("Password reset result:", result);
    } catch (error) {
      console.log("Error in useForgetPassword:", error);
      setForgetError("Something went wrong. Please try again.");
    } finally {
      setForgetError(null);
    }
  };

  return {
    email,
    setEmail,
    newPassword,
    setNewPassword,
    handleForgetPass,
    forgetError,
    handleNewPassword,
  };
};

export default useForgetPassword;
