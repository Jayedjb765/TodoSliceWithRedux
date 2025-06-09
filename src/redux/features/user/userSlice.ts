import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [{ id: 1, name: "John", email: "jayedjb76@gmail.com", age: 30 }],
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});
