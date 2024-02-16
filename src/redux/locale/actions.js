import { createAction } from "@reduxjs/toolkit";

// export const changeLang = (newLang) => {
//   return { type: "locale/changeLang", payload: newLang };
// };

export const changeLang = createAction("locale/changeLang");
