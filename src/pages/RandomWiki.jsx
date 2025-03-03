import { useState, useEffect } from "react";
import usePostStore from "../stores/PostStore";
import SearchBar from "../components/SearchBar";
import "./Wiki.css";
import WikiContent from "../components/WikiContent";

export default function RandomWiki() {
  const [search, setSearch] = useState("");

  const { post, loading, error, randomPost } = usePostStore();

  useEffect(() => {
    randomPost();
    setSearch(post.name);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
      <WikiContent post={post} />
    </>
  );
}
