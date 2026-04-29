import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isFilterOpen: false,
};

export const filterSlice = createSlice({
  name: "filterSlice",
  initialState,
  reducers: {
    toggleFilter: (state) => {
      state.isFilterOpen = !state.isFilterOpen;
    },
  },
});

export const { toggleFilter } = filterSlice.actions;

export default filterSlice.reducer;
