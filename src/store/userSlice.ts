import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
    removeUser: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.users = state.users.filter((user) => user.id !== id);
    },
  },
});

export const { addUser, updateUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
