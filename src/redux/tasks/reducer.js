import { initialTaskState } from "./constans";

export const tasksRedeucer = (state = initialTaskState, action) => {
  switch (action.type) {
    case "tasks/addTask":
      return [...state, action.payload];
    case "tasks/deleteTask":
      return state.filter((task) => task.id !== action.payload);
    case "tasks/toggleCompleted":
      return state.map((task) => {
        if (task.id !== action.payload) {
          return task;
        }
        return {
          ...task,
          completed: !task.completed,
        };
      });
    default:
      return state;
  }
};
