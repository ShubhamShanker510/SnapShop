import { configureStore, createReducer } from "@reduxjs/toolkit";
import shareDataSlice from "./shareDate";
import cartSlice from "./cartSlice"
import storage from 'redux-persist/lib/storage'
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const persistConfig={
    key:"cart",
    storage
}

const persistedCardReducer=persistReducer(persistConfig,cartSlice);


const store = configureStore({
    reducer: {
        data: shareDataSlice,
        cart: persistedCardReducer

    },
});

const persistor=persistStore(store);

export {persistor,store}
