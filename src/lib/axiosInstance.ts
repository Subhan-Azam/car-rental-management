import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://car-rental-management-khaki.vercel.app/api",
  // baseURL: "http://localhost:3000/api",
});
