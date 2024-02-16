import { createReducer } from "@reduxjs/toolkit";
import { deposit } from "./actions";
import { withdraw } from "./actions";

export const initialBalanceState = { value: 100 };

// export const balanceReducer = (state = initialBalanceState, action) => {
//   switch (action.type) {
//     case deposit.type:
//       return { ...state, value: state.value + action.payload };
//     case withdraw.type:
//       return {
//         ...state,
//         value: state.value > 0 ? state.value - action.payload : 0,
//       };
//     default:
//       return state;
//   }
// };

export const balanceReducer = createReducer(initialBalanceState, (builder) => {
  builder
    .addCase(deposit, (state, action) => {
      return { ...state, value: state.value + action.payload };
    })
    .addCase(withdraw, (state, action) => {
      return {
        ...state,
        value: state.value > 0 ? state.value - action.payload : 0,
      };
    });
});
