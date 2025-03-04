import {
  useNavigate,
  Link,
  useSearchParams,
  useLocation,
} from "react-router-dom"; // ✅ useSearchParams 추가
import "./SearchBar.css";
import BackButton from "./BackButton";
import Delete from "../assets/delete.svg";
import SearchIcon from "../assets/search.svg";
import Random from "../assets/random.svg";

export default function SearchBar({ value, onChange }) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("name") || ""; // ✅ 기존 검색어 유지
  const location = useLocation();

  const handleSearch = () => {
    if (!value.trim()) return;
    console.log(searchQuery);
    navigate(`/search?name=${encodeURIComponent(value)}`); // ✅ 항상 `?name=검색어` 유지
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearch();
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
        onKeyDown={handleKeyDown} // ✅ 엔터 키 입력 시 검색 실행
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
      {/* ✅ 검색 버튼 클릭 시 `?name=검색어` 형식 유지 */}
      <button className="search-bar-right-botton" onClick={handleSearch}>
        <img width={24} src={SearchIcon} alt="검색" />
      </button>

      <Link
        reloadDocument
        className="search-bar-right-botton"
        to="/random"
        key={location.key}
      >
        <img width={24} src={Random} alt="랜덤" />
      </Link>
    </div>
  );
}
