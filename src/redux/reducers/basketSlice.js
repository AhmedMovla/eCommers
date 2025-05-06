import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";


export const getBasketThunk = createAsyncThunk("get/basket",async ()=>{
    const res = await axios.get(`https://6811ee8f3ac96f7119a6292b.mockapi.io/api`)
    return res.data
})

export const delBasketThunk = createAsyncThunk("del/basket",async (item)=>{
    const res = await axios.delete(`https://6811ee8f3ac96f7119a6292b.mockapi.io/api/${item.id}`)
    return item.id
})

export const basketSlice = createSlice({
    name: "basket",
    initialState: {
        basket:[]
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getBasketThunk.fulfilled, (state, action) => {
                state.loading = false
                state.basket = action.payload
            })
            .addCase(delBasketThunk.fulfilled, (state, action) => {
                state.loading = false
                state.basket.filter(item => item.id !== action.payload)
            })
    }
})

export default basketSlice.reducer;