import UserInfoFields from "./UseInfoField";
import "./CommonForm.css";

const CommonForm = ({ formData, handleChange }) => {
  return (
    <div className="container">
      {/**이름, 학번, 단과대, 학과 */}
      <UserInfoFields formData={formData} handleChange={handleChange} />
      {/* 내용 입력칸 */}
      <div className="input-content">
        <label htmlFor="content">내용</label>
        <textarea
          id="content"
          name="content"
          value={formData.content}
          onChange={handleChange}
          className={formData.content ? "filled" : ""}
          placeholder="타인에 대한 비방은 삼가해주시기 바랍니다."
        />
      </div>

      {/* 작성자 입력칸 */}
      <div className="input-group input-author">
        <label htmlFor="author">작성자</label>
        <input
          type="text"
          id="author"
          name="author"
          value={formData.author}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default CommonForm;
