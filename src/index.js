import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals'; 
// import Employee from './part2ass/Employee'
// import Empform from './compo2/EmployeeForm.js'
// import Login from './component/login'
import App from './App'
// import App from './App'
import 'bootstrap/dist/css/bootstrap.css';
ReactDOM.render(
  <React.StrictMode>
<div class="topnav">
  <a class="active" href="#home">Home</a>
  <a href="#news">Login</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
</div>
    
    {/* <Empform /> */}
    {/* <Employee/> */}
   <App />
   {/* <Login /> */}
  </React.StrictMode>,
  document.getElementById('root')
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
