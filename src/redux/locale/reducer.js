import { createReducer } from "@reduxjs/toolkit";
import { changeLang } from "./actions";

export const initialLocaleState = { lang: "uk" };

// export const localeReducer = (state = initialLocaleState, action) => {
//   switch (action.type) {
//     case changeLang.type:
//       return { ...state, lang: action.payload };
//     default:
//       return state;
//   }
// };

export const localeReducer = createReducer(initialLocaleState, (builder) => {
  builder.addCase(changeLang, (state, action) => {
    return { ...state, lang: action.payload };
  });
});
