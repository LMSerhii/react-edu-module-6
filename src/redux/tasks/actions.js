// import { nanoid } from "nanoid";

// export const addTask = (text) => {
//   return {
//     type: "tasks/addTask",
//     payload: {
//       id: nanoid(),
//       completed: false,
//       text: text,
//     },
//   };
// };

// export const deleteTask = (taskId) => {
//   return {
//     type: "tasks/deleteTask",
//     payload: taskId,
//   };
// };

// export const toggleCompleted = (taskId) => {
//   return {
//     type: "tasks/toggleCompleted",
//     payload: taskId,
//   };
// };

import { createAction, nanoid } from "@reduxjs/toolkit";

export const addTask = createAction("tasks/addTask", (text) => {
  return {
    payload: {
      text,
      id: nanoid(),
      completed: false,
    },
  };
});

export const deleteTask = createAction("tasks/deleteTask");

export const toggleCompleted = createAction("tasks/toggleCompleted");
