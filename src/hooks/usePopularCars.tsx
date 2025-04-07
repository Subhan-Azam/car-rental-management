import { popularCars } from "@/store/slices/carCrudSlice";
import { useAppDispatch } from "@/store/store";
import { useEffect, useState } from "react";

const usePopularCars = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPopularCars = async () => {
      setLoading(true);
      try {
        await dispatch(popularCars()).unwrap();
      } catch {
        setError("Failed to get popular cars!");
      } finally {
        setLoading(false);
      }
    };

    fetchPopularCars();
  }, []);

  return { loading, error };
};

export default usePopularCars;
