import { Link } from "react-router-dom";

export default function WikiMiniButton({ name }) {
  return (
    <>
      <Link to={`/wiki/${name}`} className="person-tag">
        {name}
      </Link>
    </>
  );
}
