import { configureStore } from "@reduxjs/toolkit";
import favSlice from "./favSlice";

export const store = configureStore({
        reducer: {
            fav: favSlice
        },
})