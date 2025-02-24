import { useState, useEffect } from "react";
import CommonForm from "/src/components/CommonForm";
import "./EditForm.css";
import back from "/src/assets/back.svg";

const fetchDocumentData = async (id) => {
  const mockData = {
    123: {
      id: "123",
      name: "홍길동",
      studentNumber: "24",
      department: "공과대학",
      major: "전자전기공학부",
      content: "이 학생은 매우 우수합니다.",
      author: "관리자",
    },
  };

  return new Promise((resolve) =>
    setTimeout(() => resolve(mockData[id] || null), 1000)
  );
};

const EditForm = () => {
  let queryParams;
  try {
    queryParams = new URLSearchParams(window.location.search);
  } catch (error) {
    console.error(error);
    queryParams = null;
  }

  const id = queryParams ? queryParams.get("id") : null;

  const [formData, setFormData] = useState({
    name: "",
    studentNumber: "25",
    department: "첨단융합대학",
    major: "시스템반도체학부",
    content: "",
    author: "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      if (id) {
        const data = await fetchDocumentData(id);
        if (data) {
          setFormData(data);
        }
      }
      setLoading(false);
    };

    loadData();
  }, [id]);

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

  const handleSubmit = async () => {
    if (isFormComplete) {
      console.log("수정된 데이터:", formData);
      alert("수정이 완료되었습니다.");
      window.history.back();
    }
  };

  return (
    <div>
      <header className="header">
        <a href="/">
          <img className="search-bar-back" src={back} alt="뒤로가기" />
        </a>
        <h2>{loading ? "위키 수정" : `${formData.name} 위키 수정`}</h2>{" "}
        {/* ✅ 이름이 나오도록 설정 */}
      </header>

      {loading ? (
        <p>데이터를 불러오는 중...</p>
      ) : (
        <CommonForm formData={formData} handleChange={handleChange} />
      )}

      <div className="register-button-container">
        <button
          className={`register-button ${
            isFormComplete ? "active" : "disabled"
          }`}
          disabled={!isFormComplete}
          type="button"
          onClick={handleSubmit}
        >
          수정 완료
        </button>
      </div>
    </div>
  );
};

export default EditForm;
