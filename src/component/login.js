import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import style from './login.module.css';
import { VscAccount} from "react-icons/vsc";
//  import TextField from '@material-ui/core/TextField';

class Login extends Component {
 state=
 {
     uname:" ",
     pass:" "
 }
     updateLogin()
        {
            console.log("Login Credentials",this.state)
            alert("logged in succesfully")
        }
       render() { 
        return ( 
            <form>
            <div className={style.login} >
                     <h1 className={style.log}><VscAccount/></h1>
                     <p className={style.in}>Log In</p>
                <div className={style.user}>
                    <label  className="m-2">Username</label>
                   <input type="text " 
                   label="Username"
                   className={style.input}
                   placeholder="Enter your username"
                   required

                   onChange={(e)=>{(this.setState({uname:e.target.value}))}}  
                   />
                   </div>
                <div className={style.pass}>
                    <label className="m-2">Password</label>
                    <input type="password" 
                     label="Password"
                     required
                     className={style.input}                   
                    placeholder="Enter your password"
                    
                    onChange={(e)=>{(this.setState({pass:e.target.value}))}} />
                 </div>
                <div >            
                    <Button type="button" onClick={()=>this.updateLogin()}className={style.btn} variant="dark">login</Button>{' '}
                </div>    
            </div>
            </form> 
            
         );
    }
 }

export default Login;
