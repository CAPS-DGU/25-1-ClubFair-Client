import { useState, useEffect } from "react";
import CommonForm from "/src/components/CommonForm";
import "./RegisterForm.css";
import usePostStore from "../stores/PostStore";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import { getCookie } from "../utils/cookie";

const Register = () => {
  const { loading, createPost } = usePostStore();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    studentNumber: "25",
    department: "첨단융합대학",
    major: "컴퓨터공학전공",
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
      alert("등록이 완료되었습니다.");
      navigate("/booth");
    }
  };

  return (
    <div>
      <header className="header">
        <BackButton navigate={navigate} />
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
