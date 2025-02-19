import { userSignUp } from "@/store/slices/authSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useState } from "react";
import { useRouter } from "next/navigation";

const useSignUp = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [authError, setAuthError] = useState<null | string>(null);

  const router = useRouter();

  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.authStore);

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

    try {
      const result = await dispatch(
        userSignUp({ firstName, lastName, email, password })
      )
        .unwrap()
        .then(() => {
          router.replace("/auth/login");
        });

      console.log("Signup Success:", result);
      setAuthError(null);
    } catch (err) {
      setAuthError(err as string);
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
