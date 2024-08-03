import { createSlice } from "@reduxjs/toolkit";

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    value: false,
  },
  reducers: {
    toggleSidebar: (state, action) => {
      state.value ? (state.value = false) : (state.value = true);
    },
  },
});
export const { toggleSidebar } = sidebarSlice.actions;

export default sidebarSlice.reducer;
