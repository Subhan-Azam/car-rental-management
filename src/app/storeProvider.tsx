// "use client";
// import { useRef } from "react";
// import { Provider } from "react-redux";
// import { store, AppStore } from "../store/store";

// export default function StoreProvider({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const storeRef = useRef<AppStore>(undefined);
//   if (!storeRef.current) {
//     storeRef.current = store();
//   }

//   return <Provider store={storeRef.current}>{children}</Provider>;
// }

"use client";
import { Provider } from "react-redux";
import { store, persistor } from "../store/store"; // Import the persisted store
import { PersistGate } from "redux-persist/integration/react";

export default function StoreProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
