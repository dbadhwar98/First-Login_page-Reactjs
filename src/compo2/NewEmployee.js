import EmployeeForm from './EmployeeForm';

const NewEmployee=(props)=>{


    return(
        <EmployeeForm GetData={props.getData}/>
           )
}
export default NewEmployee;