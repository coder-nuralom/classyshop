import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showSearchModal: false,
};

export const searchModalSlice = createSlice({
  name: "SearchModal",
  initialState,
  reducers: {
    toggleSearchModal: (state) => {
      state.showSearchModal = !state.showSearchModal;
    },
  },
});

export const { toggleSearchModal } = searchModalSlice.actions;

export default searchModalSlice.reducer;
