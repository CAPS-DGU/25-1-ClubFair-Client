import { create } from "zustand";
import axios from "axios";

const usePostListStore = create((set) => ({
  posts: [],
  loading: false,
  errorMessage: "",
  fetchAllPosts: async () => {
    set({ loading: true, errorMessage: "" });
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/wiki/public`);

      const data = response.data;

      if (data.errorCode) {
        console.warn("데이터 불러오기 실패:", data.message);
        set({ posts: [], errorMessage: data.message, loading: false });
      } else {
        set({ posts: data.result.wikiList, errorMessage: "", loading: false });
      }
    } catch (error) {
      console.error("API 요청 실패:", error);
      set({ posts: [], errorMessage: "데이터를 불러오는 중 오류가 발생했습니다.", loading: false });
    }

  },
  // 리스트 가져오는 함수
  fetchPosts: async (department) => {
    set({ loading: true, errorMessage: "" });
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/wiki/public?dept=${department}`);

      const data = response.data;

      if (data.errorCode) {
        console.warn("데이터 불러오기 실패:", data.message);
        set({ posts: [], errorMessage: data.message, loading: false });
      } else {
        set({ posts: data.result.wikiList, errorMessage: "", loading: false });
      }
    } catch (error) {
      console.error("API 요청 실패:", error);
      set({ posts: [], errorMessage: "데이터를 불러오는 중 오류가 발생했습니다.", loading: false });
    }
  },
}));

export default usePostListStore;
