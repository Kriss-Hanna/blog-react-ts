import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useEffect } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  token: string;
}

interface UserState {
  users: User[];
}

const initialState: UserState = {
  users: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },
    updateUser: (state, action: PayloadAction<User>) => {
      const { id, name } = action.payload;
      const user = state.users.find((user) => user.id === id);
      if (user) {
        user.name = name;
      }
    },
    deleteUser: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.users = state.users.filter((user) => user.id !== id);
    },
  },
});

export const { getUsers, addUser, updateUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
