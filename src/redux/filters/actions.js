import { createAction } from "@reduxjs/toolkit";

// export const setStatusFilter = (value) => {
//   return {
//     type: "filters/setStatusFilter",
//     payload: value,
//   };
// };

export const setStatusFilter = createAction("filters/setStatusFilter");
