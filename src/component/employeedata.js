import React from 'react';
import Emptile from './employeetile'

function Emp(props){
  
console.log(props.Data[0])
    return (
      <div>
       <Emptile details={props.Data[0]}/>
       <Emptile details={props.Data[1]}/>
       <Emptile details={props.Data[2]}/>
       <Emptile details={props.Data[3]}/>
       <Emptile details={props.Data[4]}/>
       <Emptile details={props.Data[5]}/>
      </div>
    );
  }
 
export default Emp ;