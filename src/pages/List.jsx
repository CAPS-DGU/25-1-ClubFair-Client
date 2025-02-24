import { useState, useEffect } from "react";
import "./List.css";
import HeaderBar from "../components/HeaderBar.jsx";
import WikiCard from "../components/WikiCard.jsx";
import { useNavigate } from "react-router-dom";
import Back from "../assets/back.svg";
import Departments from "../components/Departments.jsx";

export default function List() {
  const [openDepts, setOpenDepts] = useState({});
  const [selectedCollege, setSelectedCollege] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const navigate = useNavigate();
  const wikiData = [
    {
      title: "김민섭",
      enteredIn: "19",
      college: "첨단융합대학",
      department: "멀티미디어소프트웨어공학전공",
    },
    {
      title: "김민섭",
      enteredIn: "20",
      college: "첨단융합대학",
      department: "멀티미디어소프트웨어공학전공",
    },
    {
      title: "김민섭",
      enteredIn: "22",
      college: "첨단융합대학",
      department: "멀티미디어소프트웨어공학전공",
    },
  ];

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
      {!isMobile && <HeaderBar></HeaderBar>}

      {isMobile ? (
        <div className="mobile-container">
          <header className="Header">
            <div className="Header-container">
              <a href="/">
                <img src={Back} alt="뒤로가기" className="back" />
              </a>
              <div className="list">리스트</div>
            </div>
            <hr></hr>
          </header>
          <div className="dropdowns">
            <label className="college">단과대 </label>
            <select onChange={handleCollegeChange} value={selectedCollege}>
              <option value="">단과대학 선택</option>
              {Object.keys(Departments).map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
            <br></br>
            <br></br>
            <label className="college">학과 </label>

            <select
              value={openDepts[selectedCollege] || ""}
              onChange={(e) =>
                setOpenDepts({
                  ...openDepts,
                  [selectedCollege]: e.target.value,
                })
              }
            >
              <option value="">학과 선택</option>
              {selectedCollege && Departments[selectedCollege].length > 0 ? (
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
            {wikiData.map((item, index) => (
              <WikiCard className="wikicard" key={index} {...item}></WikiCard>
            ))}
          </div>
        </div>
      ) : (
        <div className="container">
          <h2 className="title">캡스위키에 오신 걸 환영합니다!</h2>
          <div className="content">
            <div className="sidebar">
              <h3>학과</h3>
              <ul>
                {Object.keys(Departments).map((dept) => (
                  <li key={dept}>
                    <button
                      className="dept-btn"
                      onClick={() => toggleDepartment(dept)}
                    >
                      {dept}
                    </button>
                    {openDepts[dept] && (
                      <ul className="sub-list">
                        {Departments[dept].length > 0 ? (
                          Departments[dept].map((sub) => (
                            <li key={sub}>{sub}</li>
                          ))
                        ) : (
                          <li className="empty">등록된 학과 없음</li>
                        )}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* 메인 콘텐츠 (박스 그리드) */}
            <div className="grid">
              <div className="box blue" onClick={() => navigate("/wiki")}>
                방지원
                <br />
                컴퓨터공학전공 23학번
              </div>
              <div className="box green">
                방지원
                <br />
                국어국문학과 23학번
              </div>
              <div className="box empty"></div>
              <div className="box empty"></div>
              <div className="box empty"></div>
              <div className="box empty"></div>
              <div className="box empty"></div>
              <div className="box empty"></div>
              <div className="box empty"></div>
              <div className="box empty"></div>
              <div className="box empty"></div>
              <div className="box empty"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
