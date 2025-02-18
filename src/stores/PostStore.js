import { create } from "zustand";

const usePostStore = create((set) => ({
  posts: [],
  addPost: (post) => set((state) => ({ posts: [...state.posts, post] })),
  removePost: (id) =>
    set((state) => ({ posts: state.posts.filter((post) => post.id !== id) })),
}));

export default usePostStore;
