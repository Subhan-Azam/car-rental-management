import { useState } from "react";
import useUserDetails from "./useUserDetails";
import useCarCrud from "./useCarCrud";

const useSearchBar = () => {
  const { cars } = useCarCrud();
  const { profilePhoto } = useUserDetails();
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropDownOpen, setIsDropDownOpen] = useState<boolean>(false);

  const suggestions = cars.filter((carBrand) =>
    carBrand?.carName?.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
