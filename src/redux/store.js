import { configureStore } from "@reduxjs/toolkit";
import shareDataSlice from "./shareDate";
import cartSlice from "./cartSlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
  key: "cart", // Persisting the cart data instead of user data
  storage,
};

// Persist only the cart state (if you want cart data to be persisted)
const persistedCartReducer = persistReducer(persistConfig, cartSlice);

const store = configureStore({
  reducer: {
    user: shareDataSlice, // No persistence for user data
    cart: persistedCartReducer, // Persisted cart data
  },
});

const persistor = persistStore(store);

export { persistor, store };
