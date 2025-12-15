import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const subscribes = createSlice({
  name: "subscribes",
  initialState,
  reducers: {
    addSubscribe: (state, action) => {
      const item = action.payload;

      const existingItem = state.items.find((i) => i.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
    },
  },
});

export const { addSubscribe } = subscribes.actions;

export default subscribes.reducer;
