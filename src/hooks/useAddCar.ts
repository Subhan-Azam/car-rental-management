import { addCar } from "@/store/slices/addCarSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useState } from "react";

const useAddCar = () => {
  const [carName, setCarName] = useState<string>("");
  const [model, setModel] = useState<string>("");
  const [mileage, setMileage] = useState<string>("");
  const [engineType, setEngineType] = useState<string>("");
  const [transmissionType, setTransmissionType] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.userDetailStore);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImage(reader.result as string); // Convert image to Base64
      };
    }
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (error) {
      setErrorMessage(error);
      return;
    }
    const carData = {
      carName,
      model,
      mileage,
      engineType,
      transmissionType,
      price,
      description,
      image,
    };

    dispatch(addCar(carData));
  };

  return {
    carName,
    setCarName,
    model,
    setModel,
    mileage,
    setMileage,
    engineType,
    setEngineType,
    transmissionType,
    setTransmissionType,
    price,
    setPrice,
    description,
    setDescription,
    submitHandler,
    handleImageChange,
    loading,
    errorMessage,
  };
};

export default useAddCar;

// import { addCar } from "@/store/slices/addCarSlice";
// import { useAppDispatch } from "@/store/store";
// import { useState } from "react";

// const useAddCar = () => {
//   const [carName, setCarName] = useState<string>("");
//   const [model, setModel] = useState<string>("");
//   const [mileage, setMileage] = useState<string>("");
//   const [engineType, setEngineType] = useState<string>("");
//   const [transmissionType, setTransmissionType] = useState<string>("");
//   const [price, setPrice] = useState<string>("");
//   const [description, setDescription] = useState<string>("");
//   const [imageFile, setImageFile] = useState<File | null>(null);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [errorMessage, setErrorMessage] = useState<string | null>(null);

//   const dispatch = useAppDispatch();

//   const handleImageChange = (file: File) => {
//     setImageFile(file);
//   };

//   const uploadImageToCloudinary = async (image: File): Promise<string | null> => {
//     try {
//       const formData = new FormData();
//       formData.append("file", image);
//       formData.append("upload_preset", "your_upload_preset"); // Set your Cloudinary Upload Preset

//       const response = await fetch("http://localhost:3000/api/cloudinary", {
//         method: "POST",
//         body: formData,
//       });

//       const data = await response.json();
//       return data.secure_url || null;
//     } catch (error) {
//       console.error("Image upload failed:", error);
//       setErrorMessage("Image upload failed. Please try again.");
//       return null;
//     }
//   };

//   const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setLoading(true);
//     setErrorMessage(null);

//     let imageUrl = "";

//     if (imageFile) {
//       imageUrl = await uploadImageToCloudinary(imageFile);
//       if (!imageUrl) {
//         setLoading(false);
//         return;
//       }
//     }

//     const carData = {
//       carName,
//       model,
//       mileage,
//       engineType,
//       transmissionType,
//       price,
//       description,
//       carImage: imageUrl, // Store the Cloudinary image URL
//     };

//     dispatch(addCar(carData));
//     setLoading(false);
//   };

//   return {
//     carName,
//     setCarName,
//     model,
//     setModel,
//     mileage,
//     setMileage,
//     engineType,
//     setEngineType,
//     transmissionType,
//     setTransmissionType,
//     price,
//     setPrice,
//     description,
//     setDescription,
//     submitHandler,
//     errorMessage,
//     imageFile,
//     handleImageChange,
//     loading,
//   };
// };

// export default useAddCar;
