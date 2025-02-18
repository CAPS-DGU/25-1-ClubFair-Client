import "./SearchBar.css";
import Back from "../assets/back.svg";
import Delete from "../assets/delete.svg";
import SearchIcon from "../assets/search.svg";

export default function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar">
      <img className="search-bar-back" src={Back} alt="뒤로가기" />
      <input
        className="search-bar-input"
        type="text"
        value={value}
        onChange={onChange}
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
      <img width={24} src={SearchIcon} alt="검색" />
    </div>
  );
}
