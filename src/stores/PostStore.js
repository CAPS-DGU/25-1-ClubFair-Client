import { create } from "zustand";
import * as axios from "axios";

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
        `${import.meta.env.VITE_API_URL}/api/wiki/${id}`
      );
      const { data } = response;
      const { result } = data;
      set({ post: result, loading: false });
    } catch (error) {
      set({ error, loading: false });
    }
  },

  // createPost, updatePost 등 다른 메서드 추가 하면 됩니다.
}));

export default usePostStore;
