import { useState, useEffect } from "react";
import "./List.css";
import HeaderBar from "../components/HeaderBar.jsx";
import WikiCard from "../components/WikiCard.jsx";
import { useNavigate } from "react-router-dom";
import Departments from "../components/Departments.jsx";
import BackButton from "../components/BackButton.jsx";
import usePostListStore from "../stores/PostListStore.js"; // Zustand store import

export default function List() {
  const [openDepts, setOpenDepts] = useState({});
  const [selectedCollege, setSelectedCollege] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const navigate = useNavigate();

  // Zustand 상태 가져오기
  const { posts, fetchPosts } = usePostListStore();

  // 컴포넌트가 처음 렌더링될 때 API 호출
  useEffect(() => {
    fetchPosts();
  }, []);

  // posts 데이터 확인 (디버깅용)
  useEffect(() => {
    console.log("📌 posts 데이터:", posts);
  }, [posts]);

  // 화면 크기 감지 (리사이즈 시 업데이트)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDepartment = (dept) => {
    setOpenDepts((prev) => ({
      ...prev,
      [dept]: !prev[dept],
    }));
  };

  const handleCollegeChange = (event) => {
    const college = event.target.value;
    setSelectedCollege(college);
    setOpenDepts({}); // 선택된 학과 초기화
  };

  return (
    <div>


       <div className="mobile-container">
         <header className="Header">
           <div className="Header-container">
             <BackButton navigate={navigate} />
             <div className="list">리스트</div>
           </div>
           <hr />
         </header>
         <div className="dropdowns">
           <label className="college">단과대 </label>
           <select onChange={handleCollegeChange} value={selectedCollege}>
             <option value="">단과대학 선택</option>
             {Departments &&
               Object.keys(Departments).map((dept) => (
                 <option key={dept} value={dept}>
                   {dept}
                 </option>
               ))}
           </select>
            <br />
            <br />
            <label className="college">학과 </label>

            <select
              value={openDepts[selectedCollege] || ""}
              onChange={(e) =>
                setOpenDepts((prev) => ({
                  ...prev,
                  [selectedCollege]: e.target.value,
                }))
              }
            >
              <option value="">학과 선택</option>
              {selectedCollege && Departments?.[selectedCollege]?.length > 0 ? (
                Departments[selectedCollege].map((sub) => (
                  <option key={sub} value={sub}>
                    {sub}
                  </option>
                ))
              ) : (
                <option value="" disabled>
                  등록된 학과 없음
                </option>
              )}
            </select>
          </div>
          <div className="student-list">
            <h3 className="student">인물</h3>
            {posts.length > 0 ? (
              posts.map((item, index) => (
                <WikiCard className="wikicard" key={index} {...item} />
              ))
            ) : (
              <p>등록된 인물이 없습니다.</p>
            )}
          </div>
        </div>
    </div>
  );
}
