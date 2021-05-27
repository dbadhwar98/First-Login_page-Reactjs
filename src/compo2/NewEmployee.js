import EmployeeForm from './EmployeeForm';

const NewEmployee=(props)=>{


    return(
        <EmployeeForm getData={props.getData}/>
           )
}
export default NewEmployee;