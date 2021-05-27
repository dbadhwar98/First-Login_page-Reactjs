import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import s from './EmployeeForm.module.css'
import TextField from '@material-ui/core/textfield'
class Empform extends Component {
    constructor(props)
    {
    super(props)
    this.state = { 
        name:" ",
        age:" ",
        id:Math.random().toString().slice(1,9)
     }}
    handelChange=(e)=>
    {
         this.setState({[e.target.name]:e.target.value})
     }
    
     handleSubmit=(e)=>{

        
        console.log(this.state.age,"this is age")
        console.log(this.state.name,"this is name")
        console.log(this.state.id,"this is id")
         e.preventDefault()
         console.log(this.state)
         console.log(this.props)
         this.props.getData(this.state)
     }
    render() { 
        return ( 
            <div className={s.form}>
            <form onSubmit={this.handleSubmit}>                 
                  <TextField
                  type="text"
                 id="outlined-helperText"
                 label="Name"
                 name="name"
                 onChange={this.handelChange}
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
                 onChange={this.handelChange}
                 variant="outlined"
                 /> 
                 <br/>
                 <br/>
               <Button  className={s.btn}variant="contained" type="submit" color="primary" > Submit
</Button>

            </form>
            </div>
         );
    }
}
 
export default Empform;