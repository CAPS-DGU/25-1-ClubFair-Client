import { isMobile } from "react-device-detect"; // react-device-detect에서 isMobile 불러오기
import "./Home.css";

export default function Home() {
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
            <img
              src="/src/assets/search.svg"
              alt="search"
              className="home-search-icon"
            />
          </a>
          <input
            type="text"
            placeholder="찾고싶은 인물의 이름을 검색해주세요!"
          />
        </div>
      </main>
      <footer className="home-footer">
        <img
          className="home-logo"
          src="/src/assets/CAPS-black.svg"
          alt="caps-logo"
        />
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
        <img
          width="40px"
          height="40px"
          src="/src/assets/logo-no-title.svg"
          alt="Caps"
        />
        <a src="" target="_blank">
          <p className="header-text">만든이</p>
        </a>
      </div>

      <h1 className="home-title">CAPS</h1>
      <p className="home-desc">
        안녕하세요, 프로그래밍 중앙동아리 CAPS입니다.
        <br /> 동박위키는 실제 캠스에서 사용하는 캡스위키를 동아리 박람회 용도에
        맞게 변형했습니다.
      </p>
      <div className="home-search-box">
        <img
          src="/src/assets/search.svg"
          alt="search"
          className="home-search-icon"
        />
        <input type="text" placeholder="찾고싶은 인물의 이름을 검색해주세요!" />
      </div>

      <div className="mobile-home-list">
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
        <span className="person-tag">안아름</span>
      </div>
      <div className="recruitment">신입부원 모집 3월 5일 마감!</div>
      <footer className="mobile-footer">
        <a src="" target="_blank">
          <img
            className="footer-icon"
            src="/src/assets/caps-circle.svg"
            alt="Caps"
          />
        </a>
        <a src="" target="_blank">
          <img
            className="footer-icon"
            src="/src/assets/instagram.svg"
            alt="Instagram"
          />
        </a>
        <a src="" target="_blank">
          <img
            className="footer-icon"
            src="/src/assets/github.svg"
            alt="GitHub"
          />
        </a>
        <a src="" target="_blank">
          <img
            className="footer-icon"
            src="/src/assets/apply.svg"
            alt="AApply"
          />
        </a>
      </footer>
    </div>
  );
}
