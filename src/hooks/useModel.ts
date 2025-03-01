import { useState } from "react";

const useModel = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target instanceof HTMLDivElement && e.target.id === "modalRemove") {
      setIsOpen(false);
    }
  };
  return { isOpen, handleIsOpen, handleOverlayClick };
};

export default useModel;
