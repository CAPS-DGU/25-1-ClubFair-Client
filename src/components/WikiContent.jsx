import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import "./WikiContent.css";
import usePostStore from "../stores/PostStore";
import { Link, useNavigate } from "react-router-dom";
import { getCookie } from "../utils/cookie";

export default function WikiContent({ post }) {

  const utcToKST = (utcString) => {
    if (utcString === undefined || utcString === "") {
      return "";
    }
    const date = new Date(utcString);
    date.setHours(date.getHours() + 9);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${year}-${month}-${day} ${hours}:${minutes}`;
  };

  const { deletePost } = usePostStore();
  const navigate = useNavigate();
  const notLogin = getCookie("access_token") === undefined;

  return (
    <div className="wiki-container">
      <div className="wiki-title">{post.name}</div>
      {!notLogin && (
        <div>
          <Link className="wiki-content-edit-button" to={`/edit/${post.id}`}>
            수정
          </Link>
          <button
            className="wiki-content-delete-button"
            onClick={async () => {
              if (window.confirm("정말로 삭제하시겠습니까?")) {
                try {
                  const response = await deletePost(post.id);
                  if (response.status === 204) {
                    navigate("/booth");
                  }
                } catch (error) {
                  console.error(error);
                }
              }
            }}
          >
            삭제
          </button>
        </div>
      )}

      <div className="wiki-markdown">
        <p>
          &quot;{post.writer}&quot;님이 {utcToKST(post.modifiedAt)}에
          수정함
        </p>
        <p>
          {post.college} &gt; {post.department}
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
