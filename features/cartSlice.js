import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartOpen: false,
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCart: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },

    addToCart: (state, action) => {
      const existingItem = state.cart.find((item) => item.id === action.payload.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },

    removeFromCart: (state, action) => {
      state.cart = cart.filter((item) => item.id !== action.payload);
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;

      const existingItem = state.cart.find((item) => item.id === id);
      if (!existingItem) return;

      if (quantity < 1) {
        state.cart = state.cart.filter((item) => item.id !== id);
      } else {
        existingItem.quantity = quantity;
      }
    },

    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const { toggleCart, addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
