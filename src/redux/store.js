import { configureStore } from "@reduxjs/toolkit";
import { balanceReducer } from "./balance/reducer";
import { localeReducer } from "./locale/reducer";
import { filtersReducer } from "./filters/reducer";
import { tasksReducer } from "./tasks/reducer";

export const store = configureStore({
  reducer: {
    balance: balanceReducer,
    locale: localeReducer,
    filters: filtersReducer,
    tasks: tasksReducer,
  },
});
