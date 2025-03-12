import { Car } from "@/store/slices/carCrudSlice";
import { useAppSelector } from "@/store/store";

const useUpdateCar = ({ item }: { item: Car }) => {
  const { cars } = useAppSelector((state) => state.carCrudStore);
  
  const exsistingCar = cars.find((c) => c.id === item.id);
  return { exsistingCar };
};

export default useUpdateCar;
