import type { RootState } from "@/redux/store";
import type { ITask } from "@/types/types";
import { v4 as uuidv4 } from "uuid";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
interface InitialState {
  tasks: ITask[];
  filter: "all" | "high" | "medium" | "low";
}
const initialState: InitialState = {
  tasks: [
    // {
    //   id: "1",
    //   title: "Task 1",
    //   description: "This is a task",
    //   dueDate: "2025-11--02",
    //   isCompleted: false,
    //   priority: "High",
    // },
    // {
    //   id: "2",
    //   title: "Task 2",
    //   description: "This is a task 2",
    //   dueDate: "2025-11--02",
    //   isCompleted: false,
    //   priority: "Medium",
    // },
  ],
  filter: "all",
};
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTasks: (state, action: PayloadAction<ITask>) => {
      const id = uuidv4();
      const taskData = {
        ...action.payload,
        id,
        isCompleted: false,
      };
      state.tasks.push(taskData);
    },
  },
});

export const { addTasks } = taskSlice.actions;
export const selectTasks = (state: RootState) => {
  return state.todo.tasks;
};
export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};

export default taskSlice.reducer;
