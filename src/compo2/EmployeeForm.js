
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import s from './EmployeeForm.module.css'
import TextField from '@material-ui/core/textfield'
class Empform extends Component {
    state = { 
        name:" ",
        age:" ",
        id:Math.random().toString().slice(1,9)
     }
    handelChangename=(e)=>
    {
         this.setState({name:e.target.value})
     }
     handelChangeage=(e)=>
     {
          this.setState({age:e.target.value})
    }
     getData=(e)=>{
        console.log(this.state.age,"this is age")
        console.log(this.state.name,"this is name")
        console.log(this.state.id,"this is id")
         e.preventDefault()
     }
    render() { 
        return ( 
            <div className={s.form}>
            <form onSubmit={this.getData}>                 
                  <TextField
                  type="text"
                 id="outlined-helperText"
                 label="Name"
                 name="name"
                 onChange={this.handelChangename}
                 value={this.state.name}
                 variant="outlined"
                 />  
                 <br/>
                 <br/>
                 <br/>
                 <TextField className={s.txt}
                 id="outlined-helperText"
                 type="text"
                 label="Age"
                 value={this.state.age}
                 name="age"
                 onChange={this.handelChangeage}
                 variant="outlined"
                 /> 
                 <br/>
                 <br/>
               <Button variant="contained" type="submit" color="primary" > Submit
</Button>

            </form>
            </div>
         );
    }
}
 
export default Empform;