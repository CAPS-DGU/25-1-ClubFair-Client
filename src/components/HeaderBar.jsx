import "./HeaderBar.css";
import SearchBar from "../components/SearchBar";
import Logo from "../assets/logo.svg";

export default function HeaderBar() {
  return (
    <header className="header">
      <div className="header-container">
        <a href="/">
          <img src={Logo} alt="CAPS 로고" className="logo" />
        </a>
        <nav className="nav-menu">
          <a href="/">홈</a>
          <a href="/about">팀원 소개</a>
          <a href="/wiki">캡스위키</a>
        </nav>
        <SearchBar />
      </div>
    </header>
  );
}
