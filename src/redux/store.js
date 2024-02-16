import { combineReducers, createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { balanceReducer } from "./balance/reducer";
import { localeReducer } from "./locale/reducer";
import { filtersReducer } from "./filters/reducer";
import { tasksRedeucer } from "./tasks/reducer";

const rootReducer = combineReducers({
  balance: balanceReducer,
  locale: localeReducer,
  tasks: tasksRedeucer,
  filters: filtersReducer,
});

export const store = createStore(rootReducer, devToolsEnhancer());
