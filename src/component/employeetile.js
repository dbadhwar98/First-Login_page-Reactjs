import React from "react";

const EmployeeTile = (props) => {
  const details = props.employees.filter((item) => {
    if (props.age === item.age) {
      return [item];
    } else if (props.age === "All") return [props.employees];
  });
  let employee = <p>No Employee for selected Age</p>;
  if (details.length > 0) {
    employee = details.map((item) => (
      <div key={item.id}>
        <div>Id-{item.id}</div>
        <span>Name-{item.name}</span>
        <br />
        <span>Age-{item.age}</span>
        <br />
        <br />
      </div>
    ));
  }

  return <div>{employee}</div>;
};

export default EmployeeTile;
