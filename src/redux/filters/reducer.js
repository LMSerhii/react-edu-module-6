import { initialFiltersState } from "./constans";

export const filtersReducer = (state = initialFiltersState, action) => {
  switch (action.type) {
    case "filters/setStatusFilter":
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};
