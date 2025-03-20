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

// import { configureStore } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage"; // Uses localStorage for persistence
// import authSlice from "./slices/authSlice";
// import userDetailsSlice from "./slices/userDetailsSlice";
// import carCrudSlice from "./slices/carCrudSlice";

// // Persist Configurations
// const persistConfig = {
//   key: "root",
//   storage,
// };

// // Wrapping carCrudStore with persistReducer
// const persistedCarCrudReducer = persistReducer(persistConfig, carCrudSlice);

// export const store = configureStore({
//   reducer: {
//     authStore: authSlice,
//     userDetailStore: userDetailsSlice,
//     carCrudStore: persistedCarCrudReducer, // Persisted Reducer
//   },
// });

// // Persistor
// export const persistor = persistStore(store);

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// // Typed Hooks
// import { useDispatch, useSelector } from "react-redux";
// export const useAppDispatch: () => AppDispatch = useDispatch;
// export const useAppSelector = useSelector.withTypes<RootState>();
