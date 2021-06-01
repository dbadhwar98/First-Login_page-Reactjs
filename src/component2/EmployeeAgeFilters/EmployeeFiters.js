import React, { useState } from "react";



const EmployeeFilter = (props) => {
  const [age, setAge] = useState("All");

  const array = ['All','23','24','1',"12",'67','25'];
   
    
  const handleChange = (e) => {
    setAge(e.target.value);
    props.saveAge(e.target.value);
  };
  return (
    <div  >
      <p>Filter by Age</p>
      <select value={age} onChange={handleChange}>
        {array.map((item) => (
          <option key={item.id} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default EmployeeFilter;
