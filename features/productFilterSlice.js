import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchTerm: "",
  categoryIds: [],
  brands: [],
  priceRange: [0, 1000],
  rating: null,
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

    setBrands: (state, action) => {
      state.brands = action.payload;
    },

    setPriceRange: (state, action) => {
      state.priceRange = action.payload;
    },

    setRating: (state, action) => {
      state.rating = action.payload;
    },

    resetFilters: (state) => {
      state.searchTerm = "";
      state.categoryIds = [];
      state.priceRange = [0, 1000];
      state.rating = null;
    },
  },
});

export const {
  setSearchTerm,
  setCategoryIds,
  setBrands,
  setPriceRange,
  setRating,
  resetFilters,
} = productFilterSlice.actions;

export default productFilterSlice.reducer;
