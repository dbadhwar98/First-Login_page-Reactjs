import React from 'react'
import EmployeeFilter from './EmployeeFilter';


const Employees = (props) => {
    
    return (
        <div>
            <EmployeeFilter saveAge={props.saveAge}/>
        </div>
      );
}

 
export default Employees;