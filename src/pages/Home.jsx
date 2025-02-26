import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import searchIcon from "../assets/search.svg";
import logo from "../assets/CAPS-black.svg";
import logoNoTitle from "../assets/logo-no-title.svg";
import capsCircle from "../assets/caps-circle.svg";
import instagram from "../assets/instagram.svg";
import github from "../assets/github.svg";
import apply from "../assets/apply.svg";
import "./Home.css";
import WikiMiniButton from "../components/WikiMiniButton";

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
  return (
    <div className="home-container">
      <header className="home-header"></header>
      <main className="home-content">
        <h1 className="home-title">CAPS</h1>
        <p className="home-desc">
          안녕하세요. 동국대학교 프로그래밍 중앙동아리 CAPS입니다. 2025학년도
          상반기 동아리 박람회를 위해 배포한 웹사이트입니다.
          <br /> 3월 5일부터 9일까지 운영됩니다. &apos;캡스위키&apos;에서 실제
          사용하는 캡스위키를 동아리 박람회 용도에 맞게 배포했습니다.
        </p>
        <div className="home-search-box">
          <a>
            <img src={searchIcon} alt="search" className="home-search-icon" />
          </a>
          <input
            type="text"
            placeholder="찾고싶은 인물의 이름을 검색해주세요!"
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
        <br /> 동박위키는 실제 캠스에서 사용하는 캡스위키를 동아리 박람회 용도에
        맞게 변형했습니다.
      </p>
      <div className="home-search-box">
        <img src={searchIcon} alt="search" className="home-search-icon" />
        <input type="text" placeholder="찾고싶은 인물의 이름을 검색해주세요!" />
      </div>

      <div className="mobile-home-list">
        <p>최근 수정 목록</p>
        <Link to="/list">
          <p>리스트 &#8594;</p>
        </Link>
      </div>
      <div className="recent-people">
        <WikiMiniButton name="윤진수" />
        <WikiMiniButton name="윤진수" />
        <WikiMiniButton name="윤진수" />
        <WikiMiniButton name="윤진수" />
        <WikiMiniButton name="윤진수" />
        <WikiMiniButton name="윤진수" />
        <WikiMiniButton name="윤진수" />
      </div>
      <div className="recruitment">신입부원 모집 3월 5일 마감!</div>
      <footer className="mobile-footer">
        <a href="https://dgucaps.kr" target="_blank">
          <img className="footer-icon" src={capsCircle} alt="Caps" />
        </a>
        <a href="https://www.instagram.com/caps_dongguk" target="_blank">
          <img className="footer-icon" src={instagram} alt="Instagram" />
        </a>
        <a href="https://github.com/CAPS-DGU" target="_blank">
          <img className="footer-icon" src={github} alt="GitHub" />
        </a>
        <a href="http://forms.gle/8GhWeFvh4c72v7vPA" target="_blank">
          <img className="footer-icon" src={apply} alt="AApply" />
        </a>
      </footer>
    </div>
  );
}
