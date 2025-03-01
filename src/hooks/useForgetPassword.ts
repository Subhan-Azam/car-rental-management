import { userForgetPassword, userNewPassword } from "@/store/slices/authSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";

const useForgetPassword = () => {
  const [email, setEmail] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [forgetError, setForgetError] = useState<string | null>(null);

  const searchParams = useSearchParams();
  const params = searchParams.get("token");
  
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.authStore);
  const router = useRouter();

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
      if (!params) {
        setForgetError("Invalid or missing reset token.");
        return;
      }

      try {
        await dispatch(
          userNewPassword({ newPassword, token: params })
        ).unwrap();
        router.push("/auth/login");
        alert("Congratulations! Your password has been updated.");
      } catch (error) {
        alert(error);
        setForgetError("Something went wrong. Please try again.");
      }
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
    loading,
    handleNewPassword,
  };
};

export default useForgetPassword;
