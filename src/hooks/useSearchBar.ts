import { useState } from "react";
import useUserDetails from "./useUserDetails";
// import useCarCrud from "./useCarCrud";
import { useAppSelector } from "@/store/store";

const useSearchBar = () => {
  // const { cars } = useCarCrud();
  const { cars } = useAppSelector((state) => state.carCrudStore);

  const { profilePhoto } = useUserDetails();
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropDownOpen, setIsDropDownOpen] = useState<boolean>(false);

  const suggestions = cars.filter((carBrand) =>
    carBrand?.brand?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  console.log("suggestions:>>==============", suggestions);

  return {
    profilePhoto,
    searchTerm,
    setSearchTerm,
    isDropDownOpen,
    setIsDropDownOpen,
    suggestions,
  };
};

export default useSearchBar;
