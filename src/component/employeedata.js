import React from 'react';

function Data(props){
    //const { employeeData } = props;

    return (
      <div>
       <h1>Employee Data</h1>
        <table border="5">
          {props.employeeData.map((data, index) => {
            return (
              <div>
                <tr key={index}>
                  <td>id :</td>
                  <td>{data.id}</td>
                </tr>
                <tr key={index}>
                  <td>Name :</td>
                  <td>{data.name}</td>
                </tr>
                <tr key={index}>
                  <td>Age :</td>
                  <td>{data.age}</td>
                </tr>
              </div>
            );
          })
            }
        </table>
      </div>
    );
  }
 
export default Data ;