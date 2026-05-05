import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  compareItems: [],
};

export const compareSlice = createSlice({
  name: "compare",
  initialState,
  reducers: {
    toggleCompare: (state, action) => {
      const existingItem = state.compareItems.find((item) => item.id === action.payload.id);

      if (existingItem) {
        state.compareItems = state.compareItems.filter(
          (item) => item.id !== action.payload.id,
        );
        toast.warn("Removed from compare");
      } else {
        if (state.compareItems.length < 3) {
          state.compareItems.push(action.payload);
          toast.success("Added to compare");
        } else {
          toast.error("You can compare maximum 4 products");
        }
      }
    },

    clearCompare: (state) => {
      state.compareItems = [];
      toast.info("Compare cleared");
    },
  },
});

export const { toggleCompare, clearCompare } = compareSlice.actions;

export default compareSlice.reducer;
