import type { RootState } from "@/redux/store";
import type { IUser } from "@/types/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
interface InitialState {
  users: IUser[];
}

const initialState: InitialState = {
  users: [
    { id: "1", name: "John", email: "jayedjb76@gmail.com", age: 30 },
    { id: "2", name: "John", email: "jayedjb76@gmail.com", age: 30 },
  ],
};
type Draftuser = Pick<IUser, "age" | "name" | "email">;
const createUser = (userData: Draftuser): IUser => {
  return { ...userData, id: nanoid() };
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<IUser>) => {
      const userdata = createUser(action.payload);
      state.users.push(userdata);
    },
  },
});

export const selectUsers = (state: RootState) => {
  return state.alluser.users;
};

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
