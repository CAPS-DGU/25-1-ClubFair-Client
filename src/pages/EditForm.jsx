import { useState, useEffect } from "react";
import CommonForm from "/src/components/CommonForm";
import "./EditForm.css";
import { useParams, useNavigate } from "react-router-dom";
import usePostStore from "../stores/PostStore";
import BackButton from "../components/BackButton";
import { EventTrigger } from "../utils/gatriggers";

const EditForm = () => {
  const { id } = useParams();
  const { post, loading, fetchPost, updatePost } = usePostStore();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    studentNumber: "25",
    department: "",
    major: "",
    content: "",
    author: "",
  });

  useEffect(() => {
    fetchPost(id);
  }, [id]);

  useEffect(() => {
    setFormData({
      name: post.name,
      studentNumber: post.entranceYear,
      department: post.college,
      major: post.department,
      content: post.content,
      author: post.writer,
    });
  }, [post]);

  if (loading) {
    return <div>Loading...</div>;
  }

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
      EventTrigger("edit", "wiki", formData.name, 1);
      const response = await updatePost(id, {
        name: formData.name,
        entranceYear: formData.studentNumber,
        department: formData.major,
        content: formData.content,
        writer: formData.author,
      });
      if (response.error) {
        alert(`Error: ${response.error.message}`);
      } else {
        alert("수정이 완료되었습니다.");
        navigate(`/wiki/${id}`);
      }
    }
  };

  return (
    <div>
      <header className="header">
        <BackButton navigate={navigate} />
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
