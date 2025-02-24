import { isMobile } from "react-device-detect";
import Home from "./Home";

import "/src/pages/BoothHome.css";
import "./Home.css";

export default function BoothHome() {
  return isMobile ? <BoothMobileView /> : <Home />;
}

function BoothMobileView() {
  return (
    <div className="booth-container">
      <div className="booth-black">
        <header className="booth-header">
          <h1 className="booth-title">CAPS</h1>
          <p className="booth-header-text">만든이</p>
        </header>

        <div className="booth-search-box">
          <img
            src="/src/assets/search.svg"
            alt="search"
            className="booth-search-icon"
          />
          <input
            type="text"
            placeholder="찾고 싶은 인물의 이름을 검색해주세요!"
          />
        </div>

        <div className="booth-home-list">
          <p>최근 수정 목록</p>
          <a href="" target="_blank">
            <p>리스트 &#8594;</p>
          </a>
        </div>

        <div className="recent-people">
          <span className="person-tag">윤진수</span>
          <span className="person-tag">방지원</span>
          <span className="person-tag">신효환</span>
          <span className="person-tag">안아름</span>
          <span className="person-tag">안아름</span>
          <span className="person-tag">안아름</span>
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
        안녕하세요, 프로그래밍 중앙동아리 CAPS입니다. 동박위키는 실제 캠스에서
        사용하는 캡스위키를 동아리 박람회 용도에 맞게 변형했습니다.
      </p>

      <div className="booth-recruitment">신입부원 모집 3월 5일 마감!</div>

      <footer className="booth-footer">
        <a>
          <img
            className="booth-footer-icon"
            src="/assets/github.svg"
            alt="GitHub"
          />
        </a>
        <a>
          <img
            className="booth-footer-icon"
            src="/assets/instagram.svg"
            alt="Instagram"
          />
        </a>
        <a>
          <img
            className="booth-footer-icon"
            src="/assets/email.svg"
            alt="Email"
          />
        </a>
        <a>
          <img
            className="booth-footer-icon"
            src="/assets/apply.svg"
            alt="Apply"
          />
        </a>
      </footer>
    </div>
  );
}
