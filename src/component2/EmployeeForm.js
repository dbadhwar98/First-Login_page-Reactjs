import s from './EmployeeForm.module.css'
import React, { useState } from 'react';
import TextField from '@material-ui/core/textfield'
import Button from 'react-bootstrap/Button';
 const Employeeform=(props)=> {
  
    const[name,setName]=useState(' ');
    const[age,setAge]=useState(' ');
    const id=(Math.floor(Math.random()*10)).toString()
    
  const handlenamechange = (e) => {
    setName(e.target.value)
  }
  const handleagechange = (e) => {
    setAge(e.target.value)
  }

  function submit(e) {
    e.preventDefault();
    console.log(age,name,id)
    props.saveDetails({
     age,name,id
    });
  }

  return (
    
    <div className={s.form}>
    <form onSubmit={submit}>                 
          <TextField
          type="text"
         id="outlined-helperText"
         label="Name"
         onChange={handlenamechange}
         value={name}
         variant="outlined"
         />  
         <br/>
         <br/>
         <br/>
         <TextField className={s.txt}
         id="outlined-helperText"
         type="text"
         label="Age"
         value={age}
         onChange={handleagechange}
         variant="outlined"
         /> 
         <br/>
         <br/>
       <Button  className={s.btn} variant="contained" type="submit" color="primary" > Submit
</Button>

    </form>
    </div>
  )
}

export default Employeeform;








