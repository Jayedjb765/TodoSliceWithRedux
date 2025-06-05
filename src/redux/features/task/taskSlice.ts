import type { RootState } from "@/redux/store";
import type { ITask } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit";
interface InitialState {
  tasks: ITask[];
  filter: "all" | "high" | "medium" | "low";
}
const initialState: InitialState = {
  tasks: [
    {
      id: "1",
      title: "Task 1",
      description: "This is a task",
      dueDate: "2025-11--02",
      isCompleted: false,
      priority: "High",
    },
    {
      id: "2",
      title: "Task 2",
      description: "This is a task 2",
      dueDate: "2025-11--02",
      isCompleted: false,
      priority: "Medium",
    },
  ],
  filter: "all",
};
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export const selectTasks = (state: RootState) => {
  return state.todo.tasks;
};
export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};

export default taskSlice.reducer;
