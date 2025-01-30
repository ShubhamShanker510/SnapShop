import { configureStore } from "@reduxjs/toolkit";
import shareDataSlice from "./shareDate";
import cartSlice from "./cartSlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
  key: "user", 
  storage,
};


const persistedCartReducer = persistReducer(persistConfig, shareDataSlice);

const store = configureStore({
  reducer: {
    user: persistedCartReducer, 
  },
});

const persistor = persistStore(store);

export { persistor, store };
