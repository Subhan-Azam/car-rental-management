import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://car-rental-management-1znd.vercel.app/api",
});
