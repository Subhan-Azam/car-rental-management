import { deleteCar, fetchCars } from "@/store/slices/carCrudSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useEffect, useState } from "react";

const useCarCrud = () => {
  const [errorMessage, seterrorMessage] = useState<string | null>(null);

  const dispatch = useAppDispatch();
  const { cars, loading, error } = useAppSelector(
    (state) => state.carCrudStore
  );

  useEffect(() => {
    if (error) {
      seterrorMessage(error);
      return;
    }
  }, [error]);

  useEffect(() => {
    const result = dispatch(fetchCars());
    console.log("result", result);
  }, [dispatch]);

  // delete car btn functionality
  const deleteHandler = async (id: string) => {
    try {
      const deleteDispatch = await dispatch(deleteCar(id)).unwrap();
      console.log("id======", id);
      console.log("deleteDispatch======", deleteDispatch);
    } catch (error) {
      console.log("Error in deleteHandler:", error);
      seterrorMessage("Failed to delete car.");
    }
  };

  return { cars, loading, errorMessage, deleteHandler };
};

export default useCarCrud;
