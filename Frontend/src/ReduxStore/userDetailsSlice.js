import { createSlice } from "@reduxjs/toolkit";

const userDetailsSlice = createSlice({
    name:'userDetails',
    initialState:{
        username:'',
        userId:'',
    },
    reducers:{
        setUsername: (state,action) => {
            state.username = action.payload;
        },
        setUserId: (state,action) => {
            state.userId = action.payload;
        }
    }
})
export const {setUsername, setUserId} = userDetailsSlice.actions;
export default userDetailsSlice.reducer;