import { userForgetPassword, userNewPassword } from "@/store/slices/authSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const useForgetPassword = () => {
  const [email, setEmail] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [forgetError, setForgetError] = useState<string | null>(null);

  const searchParams = useSearchParams();
  const params = searchParams.get("token");

  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.authStore);
  const router = useRouter();

  const handleForgetPass = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await dispatch(userForgetPassword(email)).unwrap();

      toast.info("Please check your email!");
      setEmail("");
      router.push("/auth/login");
    } catch {
      setForgetError(error);
      toast.error(error);
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

      if (newPassword.length < 6) {
        setForgetError("Length must be 6 characters");
        return;
      }

      await dispatch(userNewPassword({ newPassword, token: params })).unwrap();
      toast.success("Congratulations! password updated.");
      router.push("/auth/login");
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.";

      console.log("Error in handleNewPassword:", error);
      toast.error(errorMessage);
      setForgetError(errorMessage);
    }
  };

  // const handleNewPassword = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   setForgetError(null);
  //   try {
  //     if (!params) {
  //       setForgetError("Invalid or missing reset token.");
  //       return;
  //     }

  //     if (newPassword.length < 6) {
  //       setForgetError("Length must be 6 characters");
  //       return;
  //     }

  //     try {
  //       await dispatch(
  //         userNewPassword({ newPassword, token: params })
  //       ).unwrap();
  //       toast.success("Congratulations! password updated.");
  //       router.push("/auth/login");
  //     } catch (error: unknown) {
  //       const errorMessage =
  //         error instanceof Error
  //           ? error.message
  //           : "Something went wrong. Please try again.";

  //       console.log("Error in handleNewPassword:", error);
  //       toast.error(errorMessage);
  //       setForgetError(errorMessage);
  //     }
  //   } catch (error) {
  //     console.log("Error in useForgetPassword:", error);
  //     setForgetError("Something went wrong. Please try again.");
  //   } finally {
  //     setForgetError(null);
  //   }
  // };

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
