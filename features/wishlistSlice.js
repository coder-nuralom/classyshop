import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  wishlist: [],
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    wishlistToggle: (state, action) => {
      const existingItem = state.wishlist.find((item) => item.id === action.payload.id);

      if (existingItem) {
        state.wishlist = state.wishlist.filter((item) => item.id !== action.payload.id);
        toast.info("Removed from wishlist");
      } else {
        state.wishlist.push(action.payload);
        toast.success("Added to wishlist");
      }
    },
  },
});

export const { wishlistToggle } = wishlistSlice.actions;
export default wishlistSlice.reducers;
