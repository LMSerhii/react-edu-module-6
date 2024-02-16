export const deposit = (value) => {
  return { type: "balance/deposit", payload: value };
};

export const withdraw = (value) => {
  return { type: "balance/withdraw", payload: value };
};
