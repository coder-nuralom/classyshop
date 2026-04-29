import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: true,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state) => {
      state.isLogin = true;
    },

    setLogout: (state) => {
      state.isLogin = false;
      state.user = null;
    },
  },
});

export const { setLogin, setLogout } = authSlice.actions;
export default authSlice.reducer;
