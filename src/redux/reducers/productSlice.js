import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export  const getProductThunk = createAsyncThunk("prodcut",async ()=>{
    const res = await axios.get("https://dummyjson.com/products")
    return res.data.products
})

export const postProductThunk = createAsyncThunk("post/basket",async (item)=>{
    const res = await axios.post("https://6811ee8f3ac96f7119a6292b.mockapi.io/api",item);
    return res.data
})

export const productSlice = createSlice({
    name: "product",
    initialState: {
        product: [],
        basket:[]
    },
    reducers:{},
    extraReducers:builder => {
        builder
            .addCase(getProductThunk.fulfilled,(state, action) => {
                state.loading = false;
                state.product = action.payload;
            })
            .addCase(postProductThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.basket.push(action.payload);
            })
    }
})

export default productSlice.reducer;