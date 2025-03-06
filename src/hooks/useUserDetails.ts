// import { useEffect, useState } from "react";
// import { useAppDispatch, useAppSelector } from "@/store/store";
// import { fetchUserDetails, updateUser } from "@/store/slices/userDetailsSlice";

// const useUserDetails = () => {
//   const [email, setEmail] = useState<string>("");
//   const [city, setCity] = useState<string>("");
//   const [street, setStreet] = useState<string>("");
//   const [dateOfBirth, setDateOfBirth] = useState<Date | null>(null);
//   const [gender, setGender] = useState<string>("");
//   const [profilePhoto, setProfilePhoto] = useState<string>("");
//   const [errorMessage, setErrorMessage] = useState<string | null>(null);

//   const dispatch = useAppDispatch();
//   const { userDetails, loading, error } = useAppSelector(
//     (state) => state.userDetailStore
//   );

//   useEffect(() => {
//     if (error) {
//       setErrorMessage("Failed to fetch data. Please reload the page");
//     }
//   }, [error]);

//   // show user Details
//   useEffect(() => {
//     if (userDetails) {
//       setEmail(userDetails.email || "");
//       setCity(userDetails.city || "");
//       setStreet(userDetails.street || "");
//       setDateOfBirth(
//         userDetails.dateOfBirth ? new Date(userDetails.dateOfBirth) : null
//       );
//       setGender(userDetails.gender || "");
//       setProfilePhoto(userDetails.profilePhoto);
//     } else {
//       dispatch(fetchUserDetails());
//     }
//   }, [userDetails, dispatch]);

//   const updateHandler = () => {
//     dispatch(
//       updateUser({
//         id: userDetails?.id,
//         email,
//         city,
//         street,
//         dateOfBirth: dateOfBirth || undefined,
//         gender,
//         profilePhoto,
//       })
//     );
//   };

//   return {
//     loading,
//     errorMessage,
//     email,
//     city,
//     setCity,
//     street,
//     setStreet,
//     dateOfBirth,
//     setDateOfBirth,
//     gender,
//     setGender,
//     profilePhoto,
//     updateHandler,
//   };
// };

// export default useUserDetails;

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
  const [loadingProfile, setLoadingProfile] = useState<boolean>(false);

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

  // ** Function to update profile photo **
  const updateProfilePhoto = async (image: string) => {
    if (!userDetails?.id) return;

    try {
      setLoadingProfile(true);
      const response = await fetch("/api/cloudinary", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          image,
          userId: userDetails.id,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to update profile photo");
      }

      setProfilePhoto(data.url);
      dispatch(fetchUserDetails());
    } catch (error: any) {
      setErrorMessage(error.message);
    } finally {
      setLoadingProfile(false);
    }
  };

  // Handle file selection
  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      if (reader.result) {
        updateProfilePhoto(reader.result as string);
      }
    };
    reader.readAsDataURL(file);
  };

  return {
    loading,
    loadingProfile,
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
    updateHandler,
    handleFileChange, // Return the function to update profile photo
  };
};

export default useUserDetails;
