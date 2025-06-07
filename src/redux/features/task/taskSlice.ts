import type { RootState } from "@/redux/store";
import type { ITask } from "@/types/types";
import { createSlice, type PayloadAction, nanoid } from "@reduxjs/toolkit";
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
type DraftTask = Pick<ITask, "title" | "description" | "dueDate" | "priority">;
const createTask = (taskData: DraftTask): ITask => {
  return { id: nanoid(), isCompleted: false, ...taskData };
};
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTasks: (state, action: PayloadAction<ITask>) => {
      const taskData = createTask(action.payload);
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
