import React from 'react';
import Emptile from './employeetile'

function EmployeeData(props)
{
  console.log(props.employees[1])
    return (
      <div>
        {props.employees.map(data=>
        {
          return  <Emptile key={data.id} 
          id={data.id}
          name={data.name}
          age={data.age} />
        
        }
        )}



       {/* <Emptile Data={props.employees[0]}/>
       <Emptile Data={props.employees[1]}/>
       <Emptile Data={props.employees[2]}/>
       <Emptile Data={props.employees[3]}/>
       <Emptile Data={props.employees[4]}/>
       <Emptile Data={props.employees[5]}/> */}
      </div>
    );
  }
 
export default EmployeeData ;