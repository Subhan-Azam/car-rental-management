import { userSignUp } from "@/store/slices/authSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const useSignUp = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [authError, setAuthError] = useState<null | string>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();

  const dispatch = useAppDispatch();
  const { error } = useAppSelector((state) => state.authStore);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !password) {
      setAuthError("All fields are required.");
      return;
    }
    if (password.length < 6) {
      setAuthError("Password must be at least 6 characters.");
      return;
    }
    if (error) {
      setAuthError(error);
      return;
    }

    setLoading(true);

    try {
      await dispatch(
        userSignUp({ firstName, lastName, email, password })
      ).unwrap();

      toast.success("You are registerd successfully");
      router.replace("/auth/login");
    } catch (err) {
      setAuthError(err as string);
    } finally {
      setLoading(false);
    }
  };

  return {
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
  };
};

export default useSignUp;
