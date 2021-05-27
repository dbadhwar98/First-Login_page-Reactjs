import EmployeeForm from './EmployeeForm';
export default function NewEmployee(props) {
   
    return (
        <div>
            <EmployeeForm saveDetails={props.saveDetails} />
        </div>
    )
}