import { useState, useEffect } from "react";
import "./List.css";
import WikiCard from "../components/WikiCard.jsx";
import { useNavigate } from "react-router-dom";
import optionDepartments from "../components/Departments.jsx";
import BackButton from "../components/BackButton.jsx";
import usePostListStore from "../stores/PostListStore.js"; // Zustand store import

export default function List() {
  const [selectedDepartment, setDepartment] = useState("");
  const [selectedCollege, setSelectedCollege] = useState("");
  const navigate = useNavigate();

  // Zustand 상태 가져오기
  const { loading, posts, fetchPosts, fetchAllPosts } = usePostListStore();

  // 컴포넌트가 처음 렌더링될 때 API 호출
  useEffect(() => {
    fetchAllPosts();
  }, []);

  useEffect(() => {
    if (selectedDepartment) {
      fetchPosts(selectedDepartment);
    }
  }, [selectedDepartment]);

  // posts 데이터 확인 (디버깅용)
  useEffect(() => {
    console.log("📌 posts 데이터:", posts);
  }, [posts]);

  if (loading) {
    return <p>데이터를 불러오는 중...</p>;
  }


  const handleCollegeChange = (event) => {
    const college = event.target.value;
    setSelectedCollege(college);
    setDepartment("");
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
            {optionDepartments &&
              Object.keys(optionDepartments).map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
          </select>
          <br />
          <br />
          <label className="college">학과 </label>

          <select
            value={selectedDepartment}
            onChange={(e) => {
              setDepartment(e.target.value);
            }}
          >
            <option value="">학과 선택</option>
            {selectedCollege && optionDepartments?.[selectedCollege]?.length > 0 ? (
              optionDepartments[selectedCollege].map((sub) => (
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
              <WikiCard className="wikicard" key={index}
                id={item.id}
                title={item.name}
                enteredIn={item.entranceYear}
                college={item.college}
                department={item.department} />
            ))
          ) : (
            <p>등록된 인물이 없습니다.</p>
          )}
        </div>
      </div>
    </div >
  );
}
