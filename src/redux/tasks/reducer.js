import { createReducer } from "@reduxjs/toolkit";
import { addTask, deleteTask, toggleCompleted } from "./actions";

export const initialTaskState = [
  { id: 0, text: "Learn HTML and CSS", completed: true },
  { id: 1, text: "Get good at JavaScript", completed: true },
  { id: 2, text: "Master React", completed: false },
  { id: 3, text: "Discover Redux", completed: false },
  { id: 4, text: "Build amazing apps", completed: false },
];

// export const tasksRedeucer = (state = initialTaskState, action) => {
//   switch (action.type) {
//     case addTask.type:
//       return [...state, action.payload];
//     case deleteTask.type:
//       return state.filter((task) => task.id !== action.payload);
//     case toggleCompleted.type:
//       return state.map((task) => {
//         if (task.id !== action.payload) {
//           return task;
//         }
//         return {
//           ...task,
//           completed: !task.completed,
//         };
//       });
//     default:
//       return state;
//   }
// };

// export const tasksReducer = createReducer(initialTaskState, (builder) => {
//   builder
//     .addCase(addTask, (state, action) => {
//       return [...state, action.payload];
//     })
//     .addCase(deleteTask, (state, action) => {
//       return state.filter((task) => task.id !== action.payload);
//     })
//     .addCase(toggleCompleted, (state, action) => {
//       return state.map((task) => {
//         if (task.id !== action.payload) {
//           return task;
//         }
//         return {
//           ...task,
//           completed: !task.completed,
//         };
//       });
//     });
// });

export const tasksReducer = createReducer(initialTaskState, (builder) => {
  builder
    .addCase(addTask, (state, action) => {
      state.push(action.payload);
    })
    .addCase(deleteTask, (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload);
      state.splice(index, 1);
    })
    .addCase(toggleCompleted, (state, action) => {
      // return state.map((task) => {
      //   if (task.id !== action.payload) {
      //     return task;
      //   }
      //   return {
      //     ...task,
      //     completed: !task.completed,
      //   };
      // });

      for (const task of state) {
        if (task.id === action.payload) {
          task.completed = !task.completed;
          break;
        }
      }
    });
});
