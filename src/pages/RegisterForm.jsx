import { useState, useEffect } from "react";
import CommonForm from "/src/components/CommonForm";
import "./RegisterForm.css";
import usePostStore from "../stores/PostStore";
import { useNavigate } from "react-router-dom";
import back from "/src/assets/back.svg";
import { getCookie } from "../utils/cookie";

const Register = () => {
  const { loading, createPost } = usePostStore();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    studentNumber: "25",
    department: "첨단융합대학",
    major: "시스템반도체학부",
    content: "",
    author: "",
  });

  useEffect(() => {
    if (getCookie("access_token") === undefined) {
      navigate("/login");
    }
  }, []);

  const isFormComplete =
    formData.name.trim() !== "" &&
    formData.content.trim() !== "" &&
    formData.author.trim() !== "" &&
    formData.studentNumber !== "" &&
    formData.department !== "" &&
    formData.major !== "";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleSubmit = async () => {
    const post = {
      name: formData.name,
      entranceYear: formData.studentNumber,
      department: formData.major,
      content: formData.content,
      writer: formData.author,
    };

    const { error } = await createPost(post);

    if (error) {
      alert(`Error: ${error.message}`);
    } else {
      navigate("/booth");
    }
  };

  return (
    <div>
      <header className="header">
        <a href="/">
          <img className="search-bar-back" src={back} alt="뒤로가기" />
        </a>
        <h2>새로운 인물 등록</h2>
      </header>

      <CommonForm formData={formData} handleChange={handleChange} />

      <div className="register-button-container">
        <button
          className={`register-button ${
            isFormComplete ? "active" : "disabled"
          }`}
          disabled={!isFormComplete}
          type="submit"
          onClick={handleSubmit}
        >
          완료
        </button>
      </div>
    </div>
  );
};

export default Register;
