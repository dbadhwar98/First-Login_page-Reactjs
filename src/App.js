import NewEmployee from './compo2/NewEmployee'
import React,{Component} from 'react';
import Employee from './part2ass/Employee';
// import  EmployeeData from './component/employeedata'

 
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { }
    
  }
 GetData=(val)=> 
  {
        console.log("value is ",val)
  } 
  render() {
    return (
      <div >
      
        <Employee/>
        <NewEmployee GetData={this.getData} />
      </div >
    );
  }
}
 
// //parent component

// function App() {
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
