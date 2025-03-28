import { deleteCar, fetchCars, updateCar } from "@/store/slices/carCrudSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useCarCrud = () => {
  const dispatch = useAppDispatch();
  const { cars, updateCarData, error } = useAppSelector(
    (state) => state.carCrudStore
  );

  const [carName, setCarName] = useState<string>(updateCarData?.carName || "");
  const [model, setModel] = useState<string>(updateCarData?.model || "");
  const [mileage, setMileage] = useState<string>(updateCarData?.mileage || "");
  const [loading, setloading] = useState<boolean>();
  const [engineType, setEngineType] = useState<string>(
    updateCarData?.engine || ""
  );
  const [transmissionType, setTransmissionType] = useState<string>(
    updateCarData?.transmission || ""
  );
  const [price, setPrice] = useState<string>(updateCarData?.price || "");
  const [carType, setCarType] = useState<string>(updateCarData?.carType || "");
  const [description, setDescription] = useState<string>(
    updateCarData?.description || ""
  );
  const [image, setImage] = useState<string>(updateCarData?.imageUrl || "");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setloading(true);
        await dispatch(fetchCars()).unwrap();
      } catch {
        toast.error("Failed to load cars.");
      } finally {
        setloading(false);
      }
    };

    fetchData();
  }, [dispatch]);

  // delete car btn functionality
  const deleteHandler = async (id: string) => {
    try {
      await dispatch(deleteCar(id)).unwrap();
      toast.success("Car deleted successfully.");
      console.log(`Car with ID ${id} deleted successfully.`);
    } catch (error) {
      console.log("Error in deleteHandler:", error);
      toast.error("Failed to delete car.");
    }
  };

  // update car fuctionality
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

  useEffect(() => {
    setCarName(updateCarData?.carName || "");
    setModel(updateCarData?.model || "");
    setMileage(updateCarData?.mileage || "");
    setEngineType(updateCarData?.engine || "");
    setTransmissionType(updateCarData?.transmission || "");
    setPrice(updateCarData?.price || "");
    setCarType(updateCarData?.carType || "");
    setDescription(updateCarData?.description || "");
    setImage(updateCarData?.imageUrl || "");
  }, [updateCarData]);

  const updateHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    console.log("submit working:>>>>");

    if (!updateCarData?.id) {
      console.log("Car ID is missing");
      return;
    }

    try {
      const updateCarDataPayload = {
        id: updateCarData?.id,
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

      const response = await dispatch(updateCar(updateCarDataPayload)).unwrap();
      await dispatch(fetchCars()).unwrap();

      toast.success(response.message || "Car updated successfully.");
    } catch (error) {
      console.log("error in update car hook======", error);
      toast.error("Error updating car");
    }
  };

  return {
    loading,
    error,
    cars,
    deleteHandler,
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
    image,
    handleImageChange,
    updateHandler,
  };
};

export default useCarCrud;
