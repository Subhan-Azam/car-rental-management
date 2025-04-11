import { useAppSelector } from "@/store/store";

const useTopViewedCars = () => {
  const { cars } = useAppSelector((state) => state.carCrudStore);

  if (!Array.isArray(cars) || cars.length === 0) return [];
  const topViewedCars = [...cars].sort((a, b) => b.views - a.views).slice(0, 3);
  console.log("topViewedCars:>>", topViewedCars);

  return topViewedCars;
};

export default useTopViewedCars;
