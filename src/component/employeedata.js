import React, { Component } from 'react';
class Data extends Component {
 
  render() {
    const { employeeData } = this.props;

    return (
      <div>
       <h1>Employee Data</h1>
        <table border="5">
          {employeeData.map((data, index) => {
            return (
              <div>
                <tr key={data.id}>
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
  }}

 
export default Data ;