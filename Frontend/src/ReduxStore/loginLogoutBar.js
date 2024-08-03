import { createSlice } from "@reduxjs/toolkit";

export const loginLogoutBarSlice = createSlice({
  name: "loginLogoutBar",
  initialState: {
    value: false,
  },
  reducers: {
    toggleLoginLogoutbar: (state, action) => {
      state.value ? (state.value = false) : (state.value = true);
    },
  },
});
export const { toggleLoginLogoutbar } = loginLogoutBarSlice.actions;

export default loginLogoutBarSlice.reducer;