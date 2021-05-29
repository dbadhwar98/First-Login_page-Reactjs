import Employee from './Employee';
import React, { useState } from 'react'

export default function EmployeeFiters(props) {
const [age,setAge]=useState(" ");

    const handleCallback=(e)=>{
               setAge({age:e})
    console.log("age is",age)
    }
   

    return (
        <div>
            <Employee value={handleCallback}/>
        </div>
    )
}
