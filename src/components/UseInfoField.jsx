import "./UseInfoField.css";

const departments = {
  공과대학: [
    "기계로봇에너지공학과",
    "건설환경공학과",
    "건축공학부",
    "산업시스템공학과",
    "에너지신소재공학과",
    "전자전기공학부",
    "정보통신공학과",
    "화공생물공학과",
  ],
  경영대학: ["경영학과", "회계학과", "경영정보학과"],
  경찰사법대학: ["경찰행정학부"],
  미래융합대학: ["융합보안학과", "사회복지상담학과", "글로벌무역학과"],
  바이오시스템대학: [
    "바이오환경과학과",
    "생명과학과",
    "식품생명공학과",
    "의생명공학과",
  ],
  불교대학: ["문화재학과", "불교학부"],
  법과대학: ["법학과"],
  사범대학: [
    "가정교육과",
    "국어교육과",
    "교육학과",
    "수학교육과",
    "역사교육과",
    "지리교육과",
    "체육교육과",
  ],
  사회과학대학: [
    "경제학과",
    "광고홍보학과",
    "국제통상학과",
    "사회복지학과",
    "사회언론정보학부",
    "식품산업관리학과",
    "정치행정학부",
  ],
  약학대학: ["약학과"],
  열린전공학부: ["열린전공학부"],
  예술대학: [
    "미술학부",
    "스포츠문화학과",
    "연극학부",
    "영화영상과",
    "한국음악과",
  ],
  이과대학: ["물리반도체과학부", "물리학과", "수학과", "통계학과", "화학과"],
  인문대학: ["국어국문학과", "일본학과", "영어영문학부", "철학과"],
  첨단융합대학: ["시스템반도체학부", "컴퓨터AI학부"],
};

const UserInfoFields = ({ formData, handleChange }) => {
  const selectedDepartment = formData.department || Object.keys(departments)[0];
  const majorOptions = departments[selectedDepartment] || [];

  return (
    <div>
      <div className="input-row">
        <div className="input-group input-name">
          <label htmlFor="name">이름</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            size="6"
            maxLength="8"
          />
        </div>

        <div className="input-group input-student-number">
          <label htmlFor="studentNumber">학번</label>
          <select
            id="studentNumber"
            name="studentNumber"
            value={formData.studentNumber}
            onChange={handleChange}
          >
            {Array.from({ length: 10 }, (_, i) => 25 - i).map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="input-group input-department">
        <label htmlFor="department">단과대</label>
        <select
          id="department"
          name="department"
          value={formData.department}
          onChange={handleChange}
        >
          {Object.keys(departments).map((dept) => (
            <option key={dept} value={dept}>
              {dept}
            </option>
          ))}
        </select>
      </div>

      <div className="input-group input-major">
        <label htmlFor="major">학과명</label>
        <select
          id="major"
          name="major"
          value={formData.major}
          onChange={handleChange}
        >
          {majorOptions.map((major) => (
            <option key={major} value={major}>
              {major}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default UserInfoFields;
