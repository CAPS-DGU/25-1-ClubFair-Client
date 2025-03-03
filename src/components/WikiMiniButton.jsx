import { Link } from "react-router-dom";

export default function WikiMiniButton({ name, id }) {
  return (
    <>
      <Link to={`/wiki/${id}`} className="person-tag">
        {name}
      </Link>
    </>
  );
}
