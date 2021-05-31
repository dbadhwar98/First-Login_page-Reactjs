import NewEmployee from './component2/NewEmployee'
import React, { useState } from 'react'
import Employee from './component2/EmployeeAgeFilters/Employee';
import  EmployeeData from './component/employeedata'

    const All_Employees= [
         {
           id: '1',
           name: 'Akhil',
           age: 20
         },
         {
           id: '2',
           name: 'Aman',
           age: 21
         },
    {
           id: '3',
           name: 'Vikas',
           age: 22
         },
    {
           id: '4',
           name: 'Harminder',
           age: 23
         },
    {
           id: '5',
           name: 'Deeksha',
           age: 24
         },
    {
           id: '6',
           name: 'Puneet',
           age: 25
         },
       ];
    

  export default function App() {
const [Employees,setEmployees]=useState(All_Employees);

const addEmployeeHandler=(newEmployee)=>{
  
  setEmployees((prevEmployees)=>{
    return [...prevEmployees,newEmployee];
  });
}

   return (
     <div>
        <NewEmployee onAddEmployee={addEmployeeHandler} />
     <br></br>
      <Employee/>
       <EmployeeData employees={Employees} />
     </div>
   );
   }
