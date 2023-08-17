import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface Post {
  id: string;
  title: string;
  body: string;
}

interface PostState {
  posts: Post[];
}

const initialState: PostState = {
  posts: [],
};

export const getAllPosts = createAsyncThunk("post/getAllPosts", async () => {
  const response = await axios.get("/posts");
  return response.data;
});

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    getPosts: (state, action: PayloadAction<Post[]>) => {
      state.posts = action.payload;
    },
    addPost: (state, action: PayloadAction<Post>) => {
      state.posts.push(action.payload);
    },
    updatePost: (state, action: PayloadAction<Post>) => {
      const { id, title, body } = action.payload;
      const post = state.posts.find((post) => post.id === id);
      if (post) {
        post.title = title;
        post.body = body;
      }
    },
    deletePost: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.posts = state.posts.filter((post) => post.id !== id);
    },
  },
});

export const { getPosts, addPost, updatePost, deletePost } = postSlice.actions;
export default postSlice.reducer;
