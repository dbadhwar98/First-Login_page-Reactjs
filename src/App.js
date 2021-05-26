import NewEmployee from './compo2/NewEmployee'
import React, { Component } from 'react';

 
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { }
    
  }
 GetData=(val)=> {
        console.log("value is ",val)
  }
 
  render() {
    return (
      <div >
        <NewEmployee GetData={this.getData} />
      </div >
    );
  }
}
 
export default App;



// import EmployeeData from './component/employeedata ';


// //parent component

// function App(props) {
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
//        <EmployeeData employees={employees} />
//      </div>
//    );
// }

// export default App;
