import { useState, useEffect } from "react";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import usePostListStore from "../stores/PostListStore";
import SearchBar from "../components/SearchBar";
import WikiCard from "../components/WikiCard";
import "./Search.css";

export default function Search() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const name = searchParams.get("name") || "";
  const { posts, searchPosts, errorMessage } = usePostListStore(); // ❗ errorMessage 추가
  const [search, setSearch] = useState(name);

  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setSearch(name);
    if (name) {
      searchPosts(name, 1);
      setPage(1);
      setHasMore(true);
      console.log(page, hasMore);
    }
  }, [name]);

  const handleSearch = () => {
    if (search.trim() === "") return;
    navigate(`/search?name=${encodeURIComponent(search)}`);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearch();
    }
  };

  return (
    <div>
      <SearchBar
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <div className="search-result-info">&quot;{name}&quot; 검색 결과</div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      {posts.length === 0 && !errorMessage ? (
        <div>
          <p
            style={{
              marginTop: "200px",
            }}
          >
            검색 결과가 없습니다.
          </p>
          <Link
            style={{
              backgroundColor: "#373737",
              padding: "10px 20px",
              color: "white",
              borderRadius: "15px",
            }}
            to="/register-form"
          >
            새로운 인물 등록하기↗
          </Link>
        </div>
      ) : (
        <div className="search-card-container">
          {posts.map((wiki) => (
            <WikiCard
              key={wiki.id}
              id={wiki.id}
              title={wiki.name}
              enteredIn={wiki.entranceYear}
              college={wiki.college}
              department={wiki.department}
            />
          ))}
        </div>
      )}
    </div>
  );
}
