import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import usePostStore from "../stores/PostStore";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import SearchBar from "../components/SearchBar";
import "./Wiki.css";

export default function Wiki() {
  const { id } = useParams();
  const [search, setSearch] = useState("");

  const { post, loading, error, fetchPost } = usePostStore();

  useEffect(() => {
    fetchPost(id);
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
      <div className="wiki-container">
        <div className="wiki-title">{post.name}</div>
        {/* <div className="wiki-title">{id}</div> */}
        <div className="wiki-markdown">
          <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
            {/* {description_markdown} */}
            {post.content}
          </Markdown>
        </div>
      </div>
    </>
  );
}
