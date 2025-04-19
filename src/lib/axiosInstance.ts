import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://carrental-management.vercel.app/api",
  // baseURL: "http://localhost:3000/api",
});
