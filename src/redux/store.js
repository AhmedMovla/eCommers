import {configureStore} from "@reduxjs/toolkit";
import productSlice from "./reducers/productSlice.js";
import basketSlice from "./reducers/basketSlice.js";

export  const  store = configureStore({
    reducer: {
        product:productSlice,
        basket: basketSlice,
    }
})