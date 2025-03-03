import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import searchIcon from "../assets/search.svg";
import logo from "../assets/CAPS-black.svg";
import logoNoTitle from "../assets/logo-no-title.svg";
import capsCircle from "../assets/caps-circle_3x.png";
import instagram from "../assets/instagram_3x.png";
import github from "../assets/github_3x.png";
import apply from "../assets/apply.svg";
import "./Home.css";
import WikiMiniButton from "../components/WikiMiniButton";
import { EventTrigger } from "../utils/gatriggers";
import axios from "axios";

export default function Home() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // 768px 이하를 모바일로 간주

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile ? <PublicMobileView /> : <PcView />;
}

function PcView() {
  const [query, setQuery] = useState(""); // ✅ 검색어 상태 추가
  const navigate = useNavigate(); // ✅ 페이지 이동 함수 추가

  const handleSearch = () => {
    if (query.trim() === "") return; // ✅ 빈 검색어 방지
    navigate(`/search?name=${query}`); // ✅ 검색 페이지로 이동
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      // ✅ Enter 키 입력 시 검색 실행
      event.preventDefault();
      handleSearch();
    }
  };

  return (
    <div className="home-container">
      <header className="home-header"></header>
      <main className="home-content">
        <h1 className="home-title">CAPS</h1>
        <p className="home-desc">
          안녕하세요. 동국대학교 프로그래밍 중앙동아리 CAPS입니다. 2025학년도
          상반기 동아리 박람회를 위해 배포한 웹사이트입니다.
          <br /> 3월 5일에 운영됩니다. &apos;캡스&apos;에서 실제 사용하는
          캡스위키를 동아리 박람회 용도에 맞게 배포했습니다.
        </p>
        <div className="home-search-box">
          <img
            src={searchIcon}
            alt="search"
            className="home-search-icon"
            onClick={handleSearch} // ✅ 아이콘 클릭 시 검색 실행
            style={{ cursor: "pointer" }} // 버튼처럼 동작하도록 변경
          />
          <input
            type="text"
            placeholder="찾고싶은 인물의 이름을 검색해주세요!"
            value={query}
            onChange={(e) => setQuery(e.target.value)} // ✅ 입력 상태 업데이트
            onKeyDown={handleKeyDown}
          />
        </div>
      </main>
      <footer className="home-footer">
        <img className="home-logo" src={logo} alt="caps-logo" />
        <p className="home-email">
          <strong>대표 이메일</strong> caps@test.com
        </p>
        <strong className="home-address">
          서울특별시 중구 필동로 1길30 원흥관 E256 캡방
        </strong>
      </footer>
    </div>
  );
}

function PublicMobileView() {
  const [query, setQuery] = useState("");
  const [recentPeople, setRecentPeople] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecentWikis = async () => {
      try {
        console.log("API 요청 시작: 최근 수정된 위키 목록 가져오기...");
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/wiki/history`
        );
        console.log("API 응답:", response.data);

        if (response.data.errorCode) {
          console.warn(
            "최근 수정된 목록 불러오기 실패:",
            response.data.message
          );
          setRecentPeople([]); // 최근 목록 초기화
          setErrorMessage(response.data.message); // 오류 메시지 저장
          alert(errorMessage);
        } else {
          setRecentPeople(response.data.result.modifiedWikiList || []); // 정상 데이터 저장
          setErrorMessage("");
        }
      } catch (error) {
        console.error("최근 수정된 위키 불러오기 실패:", error);
        setRecentPeople([]);
        setErrorMessage("최근 수정된 위키를 불러오는 중 오류가 발생했습니다."); // 네트워크 오류 메시지
        alert(errorMessage);
      }
    };

    fetchRecentWikis();
  }, []);

  const handleSearch = () => {
    if (query.trim() === "") return;
    navigate(`/search?name=${encodeURIComponent(query)}`);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearch();
    }
  };

  return (
    <div className="mobile-container">
      <div className="home-header">
        <Link to="/">
          <img width="40px" height="40px" src={logoNoTitle} alt="Caps" />
        </Link>
        <Link to="/about-us">
          <p className="header-text">만든이</p>
        </Link>
      </div>

      <h1 className="home-title">CAPS</h1>
      <p className="home-desc">
        안녕하세요, 프로그래밍 중앙동아리 CAPS입니다.
        <br /> 동박위키는 실제 캡스에서 사용하는 캡스위키를 동아리 박람회 용도에
        맞게 변형했습니다.
      </p>

      <div className="home-search-box">
        <img
          src={searchIcon}
          alt="search"
          className="home-search-icon"
          onClick={handleSearch}
          style={{ cursor: "pointer" }}
        />
        <input
          onKeyDown={handleKeyDown}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder="찾고싶은 인물의 이름을 검색해주세요!"
        />
      </div>

      <div className="mobile-home-list">
        <p>최근 수정 목록</p>
        <Link to="/list">
          <p>리스트 &#8594;</p>
        </Link>
      </div>

      {/* ✅ 최근 수정된 인물 리스트 */}
      <div className="recent-people">
        {recentPeople.length > 0 ? (
          recentPeople.map((wiki) => (
            <WikiMiniButton key={wiki.id} name={wiki.name} id={wiki.id} />
          ))
        ) : (
          <p>최근 수정된 인물이 없습니다.</p>
        )}
      </div>

      <div className="recruitment">신입부원 모집 3월 5일 마감!</div>

      <footer className="mobile-footer">
        <a
          href="https://dgucaps.kr"
          target="_blank"
          onClick={(e) => {
            e.preventDefault();
            EventTrigger({
              action: "click",
              category: "OutBound",
              label: "https://dgucaps.kr",
              value: 1,
            });
            window.open("https://dgucaps.kr");
          }}
        >
          <img className="footer-icon" src={capsCircle} alt="Caps" />
        </a>
        <a
          href="https://www.instagram.com/caps_dongguk"
          target="_blank"
          onClick={(e) => {
            e.preventDefault();
            EventTrigger({
              action: "click",
              category: "OutBound",
              label: "https://www.instagram.com/caps_dongguk",
              value: 1,
            });
            window.open("https://www.instagram.com/caps_dongguk");
          }}
        >
          <img className="footer-icon" src={instagram} alt="Instagram" />
        </a>
        <a
          href="https://github.com/caps-dgu"
          target="_blank"
          onClick={(e) => {
            e.preventDefault();
            EventTrigger({
              action: "click",
              category: "OutBound",
              label: "https://github.com/caps-dgu",
              value: 1,
            });
            window.open("https://github.com/caps-dgu");
          }}
        >
          <img className="footer-icon" src={github} alt="GitHub" />
        </a>
        <a
          href="http://forms.gle/8GhWeFvh4c72v7vPA"
          target="_blank"
          onClick={(e) => {
            e.preventDefault();
            EventTrigger({
              action: "click",
              category: "OutBound",
              label: "http://forms.gle/8GhWeFvh4c72v7vPA",
              value: 1,
            });
            window.open("http://forms.gle/8GhWeFvh4c72v7vPA");
          }}
        >
          <img className="footer-icon" src={apply} alt="AApply" />
        </a>
      </footer>
    </div>
  );
}
