import "./UseInfoField.css";
import { opeionDepartment as departments } from "./Departments";

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
