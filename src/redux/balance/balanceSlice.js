import { createSlice } from "@reduxjs/toolkit";

const balanceSlice = createSlice({
  name: "balance",
  initialState: { value: 100 },
  reducer: {
    deposit(state, action) {
      state.value += action.payload;
    },
    withdraw(state, action) {
      state.value -= action.payload;
    },
  },
});

export const { deposit, withdraw } = balanceSlice.actions;
export const balanceReducer = balanceSlice.reducer;
