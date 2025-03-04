import { create } from "zustand";
import axios from "axios";

const usePostListStore = create((set) => ({
  posts: [],
  errorMessage: "",

  // 리스트 가져오는 함수
  fetchPosts: async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/wiki/public`);

      const data = response.data;

      if (data.errorCode) {
        console.warn("데이터 불러오기 실패:", data.message);
        set({ posts: [], errorMessage: data.message });
      } else {
        set({ posts: data.result.wikiList, errorMessage: "" });
      }
    } catch (error) {
      console.error("API 요청 실패:", error);
      set({ posts: [], errorMessage: "데이터를 불러오는 중 오류가 발생했습니다." });
    }
  },
}));

export default usePostListStore;
