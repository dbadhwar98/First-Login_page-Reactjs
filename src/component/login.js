import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import style from './login.module.css';
import { VscAccount} from "react-icons/vsc";
class Login extends Component {
       render() { 
        return ( 
            <div className={style.login} >
                     <h1 className={style.log}><VscAccount/></h1>
                     <p className={style.in}>Log In</p>
                <div className={style.user}>
                    <label className='m-2'>
                       Username
                    </label>
                    <input className={style.input} name="user" type="text" placeholder="Enter your username"></input>
                 </div>
                <div className={style.pass}>
                    <label className="m-2">
                        Password
                    </label>
                    <input type="password" className={style.input} name="pass" placeholder="Enter your password"></input>
                 </div>
                <div >            
                    <Button type="submit"className={style.btn} variant="dark">login</Button>{' '}
                </div>
            </div>
         );
    }
 }
 
export default Login;
