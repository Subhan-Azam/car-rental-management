import { useParams } from "next/navigation";
import useCarCrud from "./useCarCrud";

const useAssets = () => {
  const { id } = useParams();
  const { cars, loading, error } = useCarCrud();

  const car = cars?.find((c) => c.id === id);

  return { car, loading, error };
};

export default useAssets;
