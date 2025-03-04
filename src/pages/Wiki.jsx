import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import usePostStore from "../stores/PostStore";
import SearchBar from "../components/SearchBar";
import "./Wiki.css";
import WikiContent from "../components/WikiContent";

export default function Wiki() {
  const { id } = useParams();
  const [search, setSearch] = useState("");

  const { post, loading, error, fetchPost } = usePostStore();

  useEffect(() => {
    fetchPost(id);
  }, [id]);

  useEffect(() => {
    setSearch(post.name);
  }, [post]);

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
