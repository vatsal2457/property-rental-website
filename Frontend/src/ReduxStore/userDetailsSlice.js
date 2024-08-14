import { createSlice } from "@reduxjs/toolkit";

const userDetailsSlice = createSlice({
    name:'userDetails',
    initialState:{
        username:'',
    },
    reducers:{
        setUsername: (state,action) => {
            state.username = action.payload;
        }
    
    }
})
export const {setUsername} = userDetailsSlice.actions;
export default userDetailsSlice.reducer;