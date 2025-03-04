import { create } from "zustand";
import axios from "axios";
import { getCookie } from "../utils/cookie";

const usePostStore = create((set) => ({
  post: {
    id: "",
    name: "",
    entranceYear: "",
    college: "",
    department: "",
    content: "",
    writer: "",
    createdAt: "",
    modifiedAt: "",
  },
  loading: false,
  error: null,
  fetchPost: async (id) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/wiki/public/${id}`
      );
      const { data } = response;
      const { result } = data;
      set({ post: result, loading: false });
    } catch (error) {
      set({ error, loading: false });
    }
  },
  randomPost: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/wiki/random`
      );
      const { data } = response;
      const { result } = data;
      set({ post: result, loading: false });
    } catch (error) {
      set({ error, loading: false });
    }
  },
  createPost: async (post) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/wiki`,
        post,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getCookie("access_token")}`,
          },
        }
      );
      const { data } = response;
      const { result } = data;
      console.log(result);

      set({ loading: false });
      return { result };
    } catch (error) {
      set({ error, loading: false });
      return { error };
    }
  },
  updatePost: async (id, post) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.patch(
        `${import.meta.env.VITE_API_URL}/api/wiki/${id}`,
        post,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getCookie("access_token")}`,
          },
        }
      );
      const { data } = response;
      const { result } = data;

      set({ loading: false });
      return { result };
    } catch (error) {
      set({ error, loading: false });
      return { error };
    }
  },

  // createPost, updatePost 등 다른 메서드 추가 하면 됩니다.
}));

export default usePostStore;
