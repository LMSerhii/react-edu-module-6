import { combineReducers } from "redux";
import { balanceReducer } from "./balance/reducer";
import { localeReducer } from "./locale/reducer";
import { filtersReducer } from "./filters/reducer";
import { tasksRedeucer } from "./tasks/reducer";

export const rootReducer = combineReducers({
  balance: balanceReducer,
  locale: localeReducer,
  tasks: tasksRedeucer,
  filters: filtersReducer,
});
