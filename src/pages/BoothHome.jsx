import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; // ✅ API 요청을 위한 axios 추가
import searchIcon from "../assets/search.svg";
import capsCircle from "../assets/caps-circle_3x.png";
import instagram from "../assets/instagram_3x.png";
import github from "../assets/github_3x.png";
import apply from "../assets/apply.svg";
import WikiMiniButton from "../components/WikiMiniButton";
import { CheckLogin } from "../utils/cookie";
import Home from "./Home"; // ✅ PC 화면에서는 기존 Home 사용
import "./BoothHome.css";

export default function BoothHome() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [recentPeople, setRecentPeople] = useState([]); // ✅ 최근 수정된 위키 목록 상태 추가

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return isMobile ? <BoothMobileView recentPeople={recentPeople} /> : <Home />;
}

function BoothMobileView({ recentPeople }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(""); 

  const handleSearch = () => {
    if (query.trim() === "") return;
    navigate(`/search?name=${encodeURIComponent(query)}`);
  };


  useEffect(() => {
    if (CheckLogin) {
      navigate('/login');  // 로그인 페이지로 리다이렉트
    }
  }, [navigate]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearch();
    }
  };

  //오류메세지 추가
  useEffect(() => {
    const fetchRecentWikis = async () => {
      try {
        console.log("🚀 API 요청 시작: 최근 수정된 위키 목록 가져오기...");
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/wiki/history`
        );
        console.log("✅ API 응답:", response.data);

        if (response.data.errorCode) {
          
          console.warn("최근 수정된 목록 불러오기 실패:", response.data.message);
          setRecentPeople([]); // 최근 목록 초기화
          setErrorMessage(response.data.message); // 오류 메시지 저장
        } else {
          setRecentPeople(response.data.result.modifiedWikiList || []); // 정상 데이터 저장
          setErrorMessage("");
        }
      } catch (error) {
        console.error("최근 수정된 위키 불러오기 실패:", error);
        setRecentPeople([]);
        setErrorMessage("최근 수정된 위키를 불러오는 중 오류가 발생했습니다."); // 네트워크 오류 메시지
      }
    };

    fetchRecentWikis();
  }, []);

  return (
    <div className="booth-container">
      <div className="booth-black">
        <header className="booth-header">
          <h1 className="booth-title">CAPS</h1>
          <Link to="/about-us" className="booth-header-text">
            만든이
          </Link>
        </header>

        
        <div className="booth-search-box">
          <img
            src={searchIcon}
            alt="search"
            className="booth-search-icon"
            onClick={handleSearch}
            style={{ cursor: "pointer" }}
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="찾고 싶은 인물의 이름을 검색해주세요!"
          />
        </div>

        <div className="booth-home-list">
          <p>최근 수정 목록</p>
          <Link to="/list">
            <p>리스트 &#8594;</p>
          </Link>
        </div>

        {/* 최근 수정된 인물 리스트 */}
        <div className="recent-people">
          {recentPeople.length > 0 ? (
            recentPeople.map((wiki) => (
              <WikiMiniButton key={wiki.id} name={wiki.name} />
            ))
          ) : (
            <p>최근 수정된 인물이 없습니다.</p> // ✅ API 응답이 없을 때 대비
          )}
        </div>
      </div>

      <div className="booth-add-wiki">
        <button
          className="booth-add-wiki-btn"
          onClick={() => (window.location.href = "/register-form")}
        >
          <p>위키 추가하기</p>
          <img
            src="/assets/add-wiki.svg"
            alt="add wiki"
            className="wiki-icon"
          />
        </button>
      </div>

      <p className="booth-desc">
        안녕하세요, 프로그래밍 중앙동아리 CAPS입니다. 동박위키는 실제 캡스에서
        사용하는 캡스위키를 동아리 박람회 용도에 맞게 변형했습니다.
      </p>

      <div className="booth-recruitment">신입부원 모집 3월 5일 마감!</div>

      <footer className="booth-footer">
        <a href="https://dgucaps.kr" target="_blank">
          <img className="booth-footer-icon" src={capsCircle} alt="Caps" />
        </a>
        <a href="https://www.instagram.com/caps_dongguk" target="_blank">
          <img className="booth-footer-icon" src={instagram} alt="Instagram" />
        </a>
        <a href="https://github.com/CAPS-DGU" target="_blank">
          <img className="booth-footer-icon" src={github} alt="Github" />
        </a>
        <a href="http://forms.gle/8GhWeFvh4c72v7vPA" target="_blank">
          <img className="booth-footer-icon" src={apply} alt="Apply" />
        </a>
      </footer>
    </div>
  );
}
