import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

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
        toast.success("Item Added to Cart.");
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
        toast.success("Item Added to Cart.");
      }
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      toast.warning("Item removed from cart");
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
