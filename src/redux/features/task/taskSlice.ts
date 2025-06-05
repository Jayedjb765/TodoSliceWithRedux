import type { ITask } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit";
interface InitialState {
  task: ITask[];
}
const initialState: InitialState = {
  task: [
    {
      id: "1",
      title: "Task 1",
      description: "This is a task",
      dueDate: "2025-11--02",
      isCompleted: false,
      priority: "High",
    },
  ],
};
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export default taskSlice.reducer;
