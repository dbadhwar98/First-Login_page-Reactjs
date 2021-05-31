import EmployeeForm from './EmployeeForm';
export default function NewEmployee(props) {
   
    return (

        <div>
            <EmployeeForm onAddEmployee={props.onAddEmployee} />
        </div>
    )
}