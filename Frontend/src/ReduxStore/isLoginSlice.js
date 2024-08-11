import { createSlice } from "@reduxjs/toolkit";

export const isLoginSlice = createSlice({
    name:"isLogin",
    initialState:{
        value:false,
    },
    reducers:{
        toggleIsLogin: (state,action) =>{
            if(localStorage.getItem('token')){
                state.value =true;
            }else{
                state.value=false;
            }
        },
    }
})
export const { toggleIsLogin } = isLoginSlice.actions
export default isLoginSlice.reducer

