import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import "./WikiContent.css";
import usePostStore from "../stores/PostStore";
import { Link, useNavigate } from "react-router-dom";

export default function WikiContent({ post }) {
  const { deletePost } = usePostStore();
  const { navigate } = useNavigate();

  return (
    <div className="wiki-container">
      <div className="wiki-title">{post.name}</div>
      <Link to={`/edit/${post.id}`}>수정</Link>
      <button
        onClick={async () => {
          if (window.confirm("정말로 삭제하시겠습니까?")) {
            await deletePost(post.id);
            navigate("/booth");
          }
        }}
      >
        삭제
      </button>
      <div className="wiki-markdown">
        <p>
          &quot;{post.writer}&quot;이(가) {post.modifiedAt.slice(0, 16)}에
          수정함
        </p>
        <p>
          {" "}
          {post.college} &gt; {post.department}{" "}
        </p>
        <p> {post.entranceYear}학번</p>
        <hr />
        <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
          {post.content}
        </Markdown>
      </div>
    </div>
  );
}
