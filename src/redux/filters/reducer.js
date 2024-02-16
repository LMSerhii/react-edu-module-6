import { statusFilters } from "./constans";
import { setStatusFilter } from "./actions";
import { createReducer } from "@reduxjs/toolkit";

export const initialFiltersState = {
  status: statusFilters.all,
};

// export const filtersReducer = (state = initialFiltersState, action) => {
//   switch (action.type) {
//     case setStatusFilter.type:
//       return {
//         ...state,
//         status: action.payload,
//       };
//     default:
//       return state;
//   }
// };

export const filtersReducer = createReducer(initialFiltersState, (builder) => {
  builder.addCase(setStatusFilter, (state, action) => {
    return {
      ...state,
      status: action.payload,
    };
  });
});
