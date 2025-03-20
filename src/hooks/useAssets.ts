import { useParams } from "next/navigation";
import useCarCrud from "./useCarCrud";

const useAssets = () => {
  // const { carAssets, loading } = useAssets();
  // console.log("carAssets:>>", carAssets?.id);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }
  // const { id } = useParams(); // Get car ID from the URL
  // const { cars, loading } = useCarCrud(); // Fetch all cars

  // if (loading) return <div>Loading...</div>;

  // // Find the car by ID
  // const car = cars?.find((c) => c.id === id);
  const { id } = useParams();

  const { cars, loading, error } = useCarCrud();
  const car = cars?.find((c) => c.id === id);

  return { car, loading, error };
};

export default useAssets;
