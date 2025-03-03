import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import "./WikiContent.css";

export default function WikiContent({ post }) {
  return (
    <div className="wiki-container">
      <div className="wiki-title">{post.name}</div>
      {/* <div className="wiki-title">{id}</div> */}
      <div className="wiki-markdown">
        <p>
          {" "}
          {post.writer}가 {post.modifiedAt}에 수정함{" "}
        </p>
        <p> {post.college} </p>
        <p> {post.department} </p>
        <p> {post.entranceYear}학번</p>
        <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
          {/* {description_markdown} */}
          {post.content}
        </Markdown>
      </div>
    </div>
  );
}
