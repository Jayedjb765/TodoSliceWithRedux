import type { RootState } from "@/redux/store";
import type { ITask } from "@/types/types";
import { createSlice, type PayloadAction, nanoid } from "@reduxjs/toolkit";
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
      priority: "high",
    },
    // {
    //   id: "2",
    //   title: "Task 2",
    //   description: "This is a task 2",
    //   dueDate: "2025-11--02",
    //   isCompleted: false,
    //   priority: "medium",
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
    toggleCompleteState: (state, action: PayloadAction<string>) => {
      console.log(action);
      state.tasks.forEach((task) =>
        task.id === action.payload
          ? (task.isCompleted = !task.isCompleted)
          : task
      );
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTasks, toggleCompleteState, deleteTask } = taskSlice.actions;
export const selectTasks = (state: RootState) => {
  return state.todo.tasks;
};
export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};

export default taskSlice.reducer;
