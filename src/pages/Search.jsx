import { useState } from "react";
import { useParams } from "react-router";
import SearchBar from "../components/SearchBar";
import WikiCard from "../components/WikiCard";
import "./Search.css";

export default function Search() {
  const { query } = useParams();
  const [search, setSearch] = useState(query);

  return (
    <div>
      <SearchBar
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <div className="search-result-info">&quot;{query}&quot; 검색 결과</div>
      <div className="search-card-container">
        <WikiCard
          title="누군가"
          enteredIn={23}
          college="첨단융합대학"
          department="컴퓨터공학전공"
        />
        <WikiCard
          title="누군가"
          enteredIn={23}
          college="첨단융합대학"
          department="컴퓨터공학전공"
        />
      </div>
    </div>
  );
}
