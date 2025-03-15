import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { fetchUserDetails, updateUser } from "@/store/slices/userDetailsSlice";

const useUserDetails = () => {
  const [email, setEmail] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [street, setStreet] = useState<string>("");
  const [dateOfBirth, setDateOfBirth] = useState<Date | null>(null);
  const [gender, setGender] = useState<string>("");
  const [profilePhoto, setProfilePhoto] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const dispatch = useAppDispatch();
  const { userDetails, loading, error } = useAppSelector(
    (state) => state.userDetailStore
  );

  useEffect(() => {
    if (error) {
      setErrorMessage("Failed to fetch data. Please reload the page");
    }
  }, [error]);

  // show user Details
  useEffect(() => {
    if (userDetails) {
      setEmail(userDetails.email || "");
      setCity(userDetails.city || "");
      setStreet(userDetails.street || "");
      setDateOfBirth(
        userDetails.dateOfBirth ? new Date(userDetails.dateOfBirth) : null
      );
      setGender(userDetails.gender || "");
      setProfilePhoto(userDetails.profilePhoto);
    } else {
      dispatch(fetchUserDetails());
    }
  }, [userDetails, dispatch]);

  // ** Function to update user details **
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setProfilePhoto(reader.result as string);
      };
    }
  };

  const updateHandler = () => {
    dispatch(
      updateUser({
        id: userDetails?.id,
        email,
        city,
        street,
        dateOfBirth: dateOfBirth || undefined,
        gender,
        profilePhoto,
      })
    );
  };

  return {
    loading,
    errorMessage,
    email,
    city,
    setCity,
    street,
    setStreet,
    dateOfBirth,
    setDateOfBirth,
    gender,
    setGender,
    profilePhoto,
    handleImageChange,
    updateHandler,
  };
};

export default useUserDetails;
