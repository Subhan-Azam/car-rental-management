import { useParams } from "next/navigation";
import { useAppSelector } from "@/store/store";

const useUserInfo = () => {
  const { id } = useParams();
  const { allUsers } = useAppSelector((state) => state.authStore);

  const user = allUsers?.find((c) => c.id === id);

  return { user };
};

export default useUserInfo;
