import { createAction } from "@reduxjs/toolkit";

export const deposit = createAction("balance/deposit");
export const withdraw = createAction("balance/withdraw");

// export const deposit = (value) => {
//   return { type: "balance/deposit", payload: value };
// };

// export const withdraw = (value) => {
//   return { type: "balance/withdraw", payload: value };
// };
