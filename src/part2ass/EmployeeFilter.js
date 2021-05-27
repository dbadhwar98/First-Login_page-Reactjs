import Employee from './Employee';
import React, { Component } from 'react';
class EmployeeFilter extends Component {
    state = { 
        age:" "
     
    }
        handleage(age){
            this.setState({age})
     }
    
    render() { 
        return ( 
            <div>
                <Employee agesubmit={this.handleage}/>
            </div>

         );
    }
}
 
export default EmployeeFilter;