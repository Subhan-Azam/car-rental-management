import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, useStore } from "react-redux";
import authSlice from "./slices/authSlice";
import userDetailsSlice from "./slices/userDetailsSlice";
import carCrudSlice from "./slices/carCrudSlice";

export const store = () => {
  return configureStore({
    reducer: {
      authStore: authSlice,
      userDetailStore: userDetailsSlice,
      carCrudStore: carCrudSlice,
    },
  });
};

export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();
