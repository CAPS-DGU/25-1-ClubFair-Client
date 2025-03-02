import { useNavigate, Link } from "react-router-dom";
import "./SearchBar.css";
import BackButton from "./BackButton";
import Delete from "../assets/delete.svg";
import SearchIcon from "../assets/search.svg";
import Random from "../assets/random.svg";

export default function SearchBar({ value, onChange }) {
  const navigate = useNavigate();

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      navigate(`/search/${value}`);
    }
  };

  return (
    <div className="search-bar">
      <BackButton navigate={navigate} />
      <input
        className="search-bar-input"
        type="text"
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        placeholder="검색어를 입력하세요"
      />
      {value && (
        <img
          width={24}
          src={Delete}
          alt="삭제"
          onClick={() => onChange({ target: { value: "" } })}
        />
      )}
      <Link className="search-bar-right-botton" to={`/search/${value}`}>
        <img width={24} src={SearchIcon} alt="검색" />
      </Link>
      <Link className="search-bar-right-botton" to="/random">
        <img width={24} src={Random} alt="랜덤" />
      </Link>
    </div>
  );
}
