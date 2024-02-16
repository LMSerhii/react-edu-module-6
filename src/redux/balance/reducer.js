export const initialBalanceState = { value: 100 };

export const balanceReducer = (state = initialBalanceState, action) => {
  switch (action.type) {
    case "balance/deposit":
      return { ...state, value: state.value + action.payload };
    case "balance/withdraw":
      return {
        ...state,
        value: state.value > 0 ? state.value - action.payload : 0,
      };
    default:
      return state;
  }
};
