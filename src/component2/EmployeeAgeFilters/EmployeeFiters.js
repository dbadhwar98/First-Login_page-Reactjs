import React, { useState } from "react";
import s from '../EmployeeForm.module.css'

const EmployeeFilter = (props) => {
  const [age, setAge] = useState(0, "All");

  const array = ["All","21","22","23","24","25","26","27"];
  const handleChange = (e) => {
    setAge(e.target.value);
    props.saveAge(e.target.value);
  };
  return (
    <div className={s.selectbox} >
     <h3>Filter by Age</h3>
      <select  value={age}  onChange={handleChange}>
        {array.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default EmployeeFilter;
