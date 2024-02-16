export const initialLocaleState = { lang: "uk" };

export const localeReducer = (state = initialLocaleState, action) => {
  switch (action.type) {
    case "locale/changeLang":
      return { ...state, lang: action.payload };
    default:
      return state;
  }
};
