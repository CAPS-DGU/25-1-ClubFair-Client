import { create } from "zustand";
import * as axios from "axios";

const usePostListStore = create((set) => ({
  posts: [],
  errorMessage: "",

  searchPosts: async (query, page = 1) => {
    try {
      const response = await axios.get(
        `${
          import.meta.env.VITE_API_URL
        }/api/wiki/public?page=${page}&name=${query}`
      );

      const data = response.data;

      if (data.errorCode) {
        console.warn("검색 실패:", data.message);
        set({ posts: [], errorMessage: data.message });
      } else {
        set({ posts: data.result.wikiList, errorMessage: "" });
      }
    } catch (error) {
      console.error("검색 API 요청 실패:", error);
      set({ posts: [], errorMessage: "검색 중 오류가 발생했습니다." });
    }
  },
}));

export default usePostListStore;
