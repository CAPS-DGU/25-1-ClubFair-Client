import { Link } from "react-router-dom";
import "./WikiCard.css";

export default function WikiCard({
  id,
  title,
  enteredIn,
  college,
  department,
}) {
  return (
    <Link to={`/wiki/${id}`}>
      <div className="wiki-card">
        <div className="wiki-card-header">
          <div className="wiki-card-title">{title}</div>
          <div className="wiki-card-desc">{enteredIn}학번</div>
        </div>
        <div className="wiki-card-desc">{college}</div>
        <div className="wiki-card-desc">{department}</div>
      </div>
    </Link>
  );
}
