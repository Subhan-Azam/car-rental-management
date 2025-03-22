import { addCar } from "@/store/slices/carCrudSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useState } from "react";
import { toast } from "react-toastify";

const useAddCar = () => {
  const [carName, setCarName] = useState<string>("");
  const [model, setModel] = useState<string>("");
  const [mileage, setMileage] = useState<string>("");
  const [engineType, setEngineType] = useState<string>("");
  const [transmissionType, setTransmissionType] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [carType, setCarType] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [image, setImage] = useState<string>("");

  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.carCrudStore);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
    }
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      if (error) {
        toast.error(error);
        return;
      }
      const carData = {
        carName,
        model,
        mileage,
        engineType,
        transmissionType,
        price,
        carType,
        description,
        image,
      };
      console.log("Car Data Sent:", carData);

      await dispatch(addCar(carData)).unwrap();

      alert("car data save");
      setCarName("");
      setModel("");
      setMileage("");
      setEngineType("");
      setTransmissionType("");
      setPrice("");
      setCarType("");
      setDescription("");
      setImage("");
    } catch (error) {
      console.log(error);
      toast.error("error saving car");
    }
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
    carType,
    setCarType,
    description,
    setDescription,
    submitHandler,
    handleImageChange,
    loading,
  };
};

export default useAddCar;
