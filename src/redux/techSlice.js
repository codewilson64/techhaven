import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productData: [],
  userInfo: null,
};

export const techSlice = createSlice({
  name: "tech",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.productData.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.productData.push(action.payload);
      }
    },
    deleteItem: (state, action) => {
      state.productData = state.productData.filter((item) => item.id !== action.payload);
    },
    resetCart: (state) => {
      state.productData = [];
    },
    incrementQuantity: (state, action) => {
      const item = state.productData.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.productData.find((item) => item.id === action.payload.id);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
  },
});

export const { addToCart, deleteItem, resetCart, incrementQuantity, decrementQuantity } = techSlice.actions;

export default techSlice.reducer;
