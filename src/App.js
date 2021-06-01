import React, { useState } from "react";
import EmployeeData from './component/employeedata'
import NewEmployee from './component2/NewEmployee'
import Employee from './component2/EmployeeAgeFilters/Employee'

const employees = [
  {
    id: "e1",
    name: "Akhil",
    age: 20,
  },
  {
    id: "e2",
    name: "Aman",
    age: "21",
  },
  {
    id: "e3",
    name: "Vikas",
    age: "22",
  },
  {
    id: "e4",
    name: "Harminder",
    age: "23",
  },
  {
    id: "e5",
    name: "Deeksha",
    age: "24",
  },
  {
    id: "e6",
    name: "Puneet",
    age: "25",
  },
];

const App = () => {
  const [newEmployees, setNewEmployees] = useState(employees);

  const onAddEmployee = (newEmployees) => {
    setNewEmployees((prevNewEmployees) => {
      return [...prevNewEmployees, newEmployees];
    });
  };
  const [age, setAge] = useState("All");
  const saveAge = (a) => {
    setAge((age) => {
      return a;
    });
  };
  return (
    <div>
      <h2>Employee data</h2>
      <EmployeeData employees={newEmployees} age={age} />
      <NewEmployee onAddEmployee={onAddEmployee} />
      <Employee saveAge={saveAge} />
    </div>
  );
};

export default App;
