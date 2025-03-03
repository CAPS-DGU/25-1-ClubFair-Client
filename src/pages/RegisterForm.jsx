import { useState } from "react";
import CommonForm from "/src/components/CommonForm";
import "./RegisterForm.css";

import back from "/src/assets/back.svg";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    studentNumber: "25",
    department: "첨단융합대학",
    major: "시스템반도체학부",
    content: "",
    author: "",
  });

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
          onClick={() => window.history.back()}
        >
          완료
        </button>
      </div>
    </div>
  );
};

export default Register;
