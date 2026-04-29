import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showMobileMenu: false,
};

export const mobileMenuSlice = createSlice({
  name: "mobileMenuSlice",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.showMobileMenu = !state.showMobileMenu;
    },
  },
});

export const { toggleMenu } = mobileMenuSlice.actions;

export default mobileMenuSlice.reducer;
