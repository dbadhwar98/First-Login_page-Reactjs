import NewEmployee from './component2/NewEmployee'
import React from 'react'
import EmployeeFilter from './component2/EmployeeAgeFilters/EmployeeFiters';

export default function App() {


  
  const saveDetails = (val) => {
    console.log(val)
  }
 
  return (
    <div>
      <NewEmployee saveDetails={saveDetails} />
      <br></br>
      <EmployeeFilter />

    </div>
  )
}







//  import  EmployeeData from './component/employeedata'

//  function App(props) {
// const employees= [
//      {
//        id: 'e1',
//        name: 'Akhil',
//        age: 20
//      },
//      {
//        id: 'e2',
//        name: 'Aman',
//        age: 21
//      },
// {
//        id: 'e3',
//        name: 'Vikas',
//        age: 22
//      },
// {
//        id: 'e4',
//        name: 'Harminder',
//        age: 23
//      },
// {
//        id: 'e5',
//        name: 'Deeksha',
//        age: 24
//      },
// {
//        id: 'e6',
//        name: 'Puneet',
//        age: 25
//      },
//    ];

//    return (
//      <div>
//        <h2>Employee data</h2>
//        <EmployeeData Data={employees} />
//      </div>
//    );
// }
