import { create } from "zustand";
import * as axios from "axios";

const usePostListStore = create((set) => ({
  posts: [],
  searchPosts: async (query) => {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/posts?q=${query}`
    );

    const { data } = response;
    set({ data });
  },
}));

export default usePostListStore;
