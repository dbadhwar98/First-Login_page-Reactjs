import Employee from './Employee';
import React from 'react'

export default function EmployeeFiters(props) {
    const handleCallback=(e)=>{
        props.saveChange(e.target.value)
    }
    return (
        <div>
            <Employee value={handleCallback}/>
        </div>
    )
}
