import React from 'react'
import EmployeeFilter from './EmployeeFiters';


const Employee = (props) => {
    
    return (
        <div>
            <EmployeeFilter saveAge={props.saveAge}/>
        </div>
      );
}

 
export default Employee;