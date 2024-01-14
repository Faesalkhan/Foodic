import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    sum: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        const updatedItems = state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );

        return {
          ...state,
          items: updatedItems,
          sum:
            state.sum + (action.payload.price || action.payload.defaultPrice),
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
          sum:
            state.sum + (action.payload.price || action.payload.defaultPrice),
        };
      }
    },

    increaseItem: (state, action) => {
      state.items = state.items.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      state.sum =
        state.sum + (action.payload.price || action.payload.defaultPrice);
    },
    decreaseItem: (state, action) => {
      state.items = state.items
        .map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: Math.max(0, item.quantity - 1) }
            : item
        )
        .filter((item) => item.quantity > 0);
      state.sum = Math.max(
        0,
        state.sum - (action.payload.price || action.payload.defaultPrice)
      );
    },
    removeAll: (state) => {
      state.items = [];
      state.sum = 0;
    },
  },
});
export default cartSlice.reducer;
export const { addItem, removeItem, removeAll, increaseItem, decreaseItem } =
  cartSlice.actions;
