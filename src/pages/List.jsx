import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import Logo from "../assets/logo.svg";
import "./List.css";
import { useNavigate } from "react-router-dom";

export default function List() {
  // 학과 데이터
  const departments = {
    "공과대학":["기계로봇에너지공학과", "건설환경공학과", "건축공학부", "산업시스템공학과", "에너지신소재공학과", "전자전기공학부", "정보통신공학과", "화공생물공학과"],
    "경영대학":["경영학과", "회계학과", "경영정보학과"],
    "경찰사법대학":["경찰행정학부"],
    "미래융합대학": ["융합보안학과", "사회복지상담학과", "글로벌무역학과"],
    "바이오시스템대학":["바이오환경과학과", "생명과학과", "식품생명공학과", "의생명공학과"],
    "불교대학":["문화재학과", "불교학부"],
    "법과대학":["법학과"],
    "사범대학":["가정교육과", "국어교육과", "교육학과", "수학교육과", "역사교육과", "지리교육과", "체육교육과"],
    "사회과학대학": ["경제학과","광고홍보학과", "국제통상학과",  "사회복지학과", "사회언론정보학부", "식품산업관리학과", "정치행정학부"],
    "약학대학":["약학과"],
    "열린전공학부":["열린전공학부"],
    "예술대학":["미술학부", "스포츠문화학과", "연극학부", "영화영상과", "한국음학과"],
    "이과대학":["물리반도체과학부", "물리학과", "수학과", "통계학과", "화학과"],
    "인문대학": ["국어국문학과", "일본학과", "영어영문학부", "철학과"],
    "첨단융합대학": ["시스템반도체학부", "컴퓨터AI학부"], 
  };

  // 각 대학의 토글 상태 관리
  const [openDepts, setOpenDepts] = useState({});

  // 대학명 클릭 시 토글 함수
  const toggleDepartment = (dept) => {
    setOpenDepts((prev) => ({
      ...prev,
      [dept]: !prev[dept], // 현재 상태 반전 (true <-> false)
    }));
  };

  const navigate = useNavigate();

  return (
    <div>
      {/* 헤더 영역 */}
      <header className="header">
        <div className="header-container">
          <img src={Logo} alt="CAPS 로고" className="logo" />
          <nav className="nav-menu">
            <a href="/">홈</a>
            <a href="/about">팀원 소개</a>
            <a href="/wiki">캡스위키</a>
          </nav>
          <SearchBar />
        </div>
      </header>

      <div className="container">
        <h2 className="title">캡스위키에 오신 걸 환영합니다!</h2>

        <div className="content">
          {/* 사이드바 학과 목록 */}
          <div className="sidebar">
            <h3>학과</h3>
            <ul>
              {Object.keys(departments).map((dept) => (
                <li key={dept}>
                  <button className="dept-btn" onClick={() => toggleDepartment(dept)}>
                    {dept}
                  </button>
                  {openDepts[dept] && (
                    <ul className="sub-list">
                      {departments[dept].length > 0 ? (
                        departments[dept].map((sub) => <li key={sub}>{sub}</li>)
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
            <div className="box blue" onClick={()=>navigate("/wiki")}>방지원<br />컴퓨터공학전공 23학번</div>
            <div className="box green">방지원<br />국어국문학과 23학번</div>
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
    </div>
  );
}
