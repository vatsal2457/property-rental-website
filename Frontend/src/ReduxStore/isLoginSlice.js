import { createSlice } from "@reduxjs/toolkit";

export const isLoginSlice = createSlice({
    name:"isLogin",
    initialState:{
        value:false,
    },
    reducers:{
        toggleIsLogin: (state,action) =>{
            state.value ? (state.value = false) : (state.value = true)
        },
    }
})
export const { toggleIsLogin } = isLoginSlice.actions
export default isLoginSlice.reducer

