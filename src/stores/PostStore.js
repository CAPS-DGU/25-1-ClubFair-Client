import { create } from "zustand";
import * as axios from "axios";

const usePostStore = create((set) => ({
  post: {},
  fetchPost: async (title) => {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/posts/${title}`
    );

    const { data } = response;
    set({ post: data });
  },
  addPost: (post) => set((state) => ({ posts: [...state.posts, post] })),
  removePost: (id) =>
    set((state) => ({ posts: state.posts.filter((post) => post.id !== id) })),
}));

export default usePostStore;
