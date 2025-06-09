import type { RootState } from "@/redux/store";
import type { IUser } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit";
interface InitialState {
  users: IUser[];
}

const initialState: InitialState = {
  users: [
    { id: "1", name: "John", email: "jayedjb76@gmail.com", age: 30 },
    { id: "2", name: "John", email: "jayedjb76@gmail.com", age: 30 },
  ],
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const selectUsers = (state: RootState) => {
  return state.alluser.users;
};

export default userSlice.reducer;
