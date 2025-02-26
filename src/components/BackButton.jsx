import Back from "../assets/back.svg";
import "./BackButton.css";

export default function BackButton({ navigate }) {
  return (
    <button className="back-button" onClick={() => navigate(-1)}>
      <img src={Back} alt="뒤로가기" className="back-button-img"></img>
    </button>
  );
}
