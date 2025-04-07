// import { configureStore } from "@reduxjs/toolkit";
// import { useDispatch, useSelector, useStore } from "react-redux";
// import authSlice from "./slices/authSlice";
// import userDetailsSlice from "./slices/userDetailsSlice";
// import carCrudSlice from "./slices/carCrudSlice";

// export const store = () => {
//   return configureStore({
//     reducer: {
//       authStore: authSlice,
//       userDetailStore: userDetailsSlice,
//       carCrudStore: carCrudSlice,
//     },
//   });
// };

// export type AppStore = ReturnType<typeof store>;
// export type RootState = ReturnType<AppStore["getState"]>;
// export type AppDispatch = AppStore["dispatch"];
// export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
// export const useAppSelector = useSelector.withTypes<RootState>();
// export const useAppStore = useStore.withTypes<AppStore>();

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Uses localStorage for persistence
import authSlice from "./slices/authSlice";
import userDetailsSlice from "./slices/userDetailsSlice";
import carCrudSlice from "./slices/carCrudSlice";
import eventSlice from "./slices/eventSlice";
import { useDispatch, useSelector, useStore } from "react-redux";

// Combine all slices
const rootReducer = combineReducers({
  authStore: authSlice,
  userDetailStore: userDetailsSlice,
  carCrudStore: carCrudSlice,
  eventStore: eventSlice,
});

// Persist configuration
const persistConfig = {
  key: "root",
  storage, // Stores data in localStorage
};

// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create store instance (not a function anymore)
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Ignore warnings related to non-serializable values
    }),
});

// Create persistor
export const persistor = persistStore(store);

// Custom hooks for dispatch, selector, and store
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = () => useStore<RootState>();
