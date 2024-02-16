import { configureStore } from "@reduxjs/toolkit";

import { filtersReducer } from "./filters/filtersSlice";
import { tasksReducer } from "./tasks/tasksSlice";

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    tasks: tasksReducer,
  },
});
