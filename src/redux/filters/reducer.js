import { statusFilters } from "./constans";

export const initialFiltersState = {
  status: statusFilters.all,
};

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
