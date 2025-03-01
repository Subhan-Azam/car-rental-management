import { useState } from "react";

const useAddCar = () => {
  const [carName, setCarName] = useState<string>("");
  const [model, setModel] = useState<string>("");
  const [mileage, setMileage] = useState<number | "">("");
  const [engineType, setEngineType] = useState<string>("");
  const [transmissionType, setTransmissionType] = useState<string>("");
  const [price, setPrice] = useState<number | "">("");
  const [desc, setDesc] = useState<string>("");
  const [pictures, setPictures] = useState<string[]>([]);
  

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const selectedFile = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setPictures((prev) => [...prev, reader.result as string]); // Store Base64 or URL
    };

    reader.readAsDataURL(selectedFile); // Convert image to Base64 URL
  };

  const removeImage = (index: number) => {
    setPictures((prev) => prev.filter((_, i) => i !== index));
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
    desc,
    setDesc,
    pictures,
    setPictures,
    handleImageSelect,
    removeImage,
  };
};

export default useAddCar;
