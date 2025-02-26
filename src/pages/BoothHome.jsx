import { isMobile } from "react-device-detect";
import { Link } from "react-router-dom";
import Home from "./Home";
import "/src/pages/BoothHome.css";
import "./Home.css";
import searchIcon from "../assets/search.svg";
import capsCircle from "../assets/caps-circle_3x.png";
import instagram from "../assets/instagram_3x.png";
import github from "../assets/github_3x.png";
import apply from "../assets/apply.svg";
import WikiMiniButton from "../components/WikiMiniButton";

export default function BoothHome() {
  return isMobile ? <BoothMobileView /> : <Home />;
}

function BoothMobileView() {
  return (
    <div className="booth-container">
      <div className="booth-black">
        <header className="booth-header">
          <h1 className="booth-title">CAPS</h1>
          <Link to="/about-us">
            <p className="booth-header-text">만든이</p>
          </Link>
        </header>

        <div className="booth-search-box">
          <img src={searchIcon} alt="search" className="booth-search-icon" />
          <input
            type="text"
            placeholder="찾고 싶은 인물의 이름을 검색해주세요!"
          />
        </div>

        <div className="booth-home-list">
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
