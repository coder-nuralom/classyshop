import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchTerm: "",
  categoryIds: [],
};

export const productFilterSlice = createSlice({
  name: "productFilterSlice",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },

    setCategoryIds: (state, action) => {
      state.categoryIds = action.payload;
    },

    resetFilters: (state) => {
      state.searchTerm = "";
      state.categoryIds = [];
    },
  },
});

export const { setSearchTerm, setCategoryIds, resetFilters } = productFilterSlice.actions;

export default productFilterSlice.reducer;
