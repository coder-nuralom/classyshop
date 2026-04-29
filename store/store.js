import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "../features/cartSlice";
import { authSlice } from "../features/authSlice";
import { filterSlice } from "../features/filterSlice";
import { logoutModalSlice } from "../features/logoutModalSlice";
import { mobileMenuSlice } from "../features/mobileMenuSlice";
import { searchModalSlice } from "../features/searchModalSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    auth: authSlice.reducer,
    filter: filterSlice.reducer,
    logoutModal: logoutModalSlice.reducer,
    mobileMenu: mobileMenuSlice.reducer,
    searchModal: searchModalSlice.reducer,
  },
});
