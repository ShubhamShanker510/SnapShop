import { configureStore } from "@reduxjs/toolkit";
import shareDataSlice from "./shareDate";

export const store = configureStore({
    reducer: {
        data: shareDataSlice
    },
});
