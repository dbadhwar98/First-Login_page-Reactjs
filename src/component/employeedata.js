import React from 'react';
import EmployeeTile from './employeetile'

function EmployeeData(props)
{
  console.log(props.employees[1])
    return (
      <div>
       
        <EmployeeTile employees={props.employees} age={props.age}  />
        
             </div>
    );
  }
 
export default EmployeeData ;