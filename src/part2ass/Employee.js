import React, { Component } from 'react';
import style from './employee.module.css'
import Button from 'react-bootstrap/Button';
export default class Employee extends Component {
    constructor(props)
    {
super(props);
this.state={
    age:" "
}
}
    
selectedValue()
    {
    console.log(this.state.age)
    //this.props.handleChange(this.state)
    
    }
    
    render()
    { 
       
        return ( <div className={style.form}>
            
            <label className={style.txt}><h4>Age</h4></label>
            <select className={style.slct} onChange={(f)=>{this.setState({age:f.target.value})}} >
                <option value="01">1</option>
                <option value="02">2</option>
                <option value="03">3</option>
                <option value="04">4</option>
                <option value="05">5</option>
                <option value="06">6</option>
                <option value="07">7</option>
                <option value="08">8</option>
                <option value="09">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">20</option>
                
            </select>
            <br/>
            <br/>
            <Button  className={style.btn}variant="contained" type="submit" color="primary" onClick={this.selectedValue()}> Submit
</Button>

        </div>
         );
    }
}