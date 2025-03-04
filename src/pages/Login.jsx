import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("id", username);
    formData.append("password", password);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/sign-in`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true,
        }
      );

      console.log(response);

      if (response.status >= 200 && response.status < 300) {
        alert("로그인 성공!");
        navigate("/booth");
      } else {
        alert("로그인 실패: " + response.data.message);
      }
    } catch (error) {
      console.error("로그인 오류:", error);
      alert("로그인 중 오류가 발생했습니다.");
    }
  };

  return (
    <div style={styles.container}>
      <h2>부스용 로그인</h2>
      <form onSubmit={handleLogin} style={styles.form}>
        <input
          type="text"
          placeholder="아이디"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          로그인
        </button>
      </form>
      <p>문서의 등록, 수정은 부스에서만 가능합니다.</p>
      <Link to="/">홈으로</Link>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "50px",
  },
  form: { display: "flex", flexDirection: "column", width: "250px" },
  input: { marginBottom: "10px", padding: "10px", fontSize: "16px" },
  button: {
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
};
