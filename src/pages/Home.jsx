import React from "react"
import "./Home.css";
export default function Home() {
  return (
    <div className = "home-container">
      <header className="home-header"></header>
      <main className="home-content">
        <h1 className="home-title">CAPS</h1>
        <p className="home-desc">
          안녕하세요. 동국대학교 프로그래밍 중앙동아리 CAPS입니다. 
          2025학년도 상반기 동아리 박람회를 위해 배포한 웹사이트입니다.
          <br/>
          3월 5일부터 9일까지 운영됩니다. 
          '캡스위키'에서 실제 사용하는 캡스위키를 동아리 박람회 용도에 맞게 배포했습니다.
        </p>

        <div className="search-box">
          <img src="/src/assets/search.svg" alt="search" className="search-icon"/>
          <input type="text" placeholder="찾고싶은 인물의 이름을 검색해주세요!"/>
        </div>
      </main>

      <footer className="home-footer">
        <img className="home-logo" src="/src/assets/CAPS-black.svg" alt="caps-logo" />
        <p className="home-email"><strong>대표 이메일</strong> caps@test.com</p>
        <strong className="home-address">서울특별시 중구 필동로 1길30 원흥관 E256 캡방  </strong>
      </footer>
    </div>
  );
}
