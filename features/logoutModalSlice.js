import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showLogoutModal: false,
};

export const logoutModalSlice = createSlice({
  name: "logoutModal",
  initialState,
  reducers: {
    setShowLogoutModal: (state, action) => {
      state.showLogoutModal = action.payload;
    },
  },
});

export const { setShowLogoutModal } = logoutModalSlice.actions;

export default logoutModalSlice.reducer;
