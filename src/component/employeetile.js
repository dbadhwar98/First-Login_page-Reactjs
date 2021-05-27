import React from 'react'

export default function employeetile(props) {
  return (
    <div>

      <h5>
        Id: {props.details.id}
      </h5>
      <h5>
         Name:{props.details.name}
        </h5>
        <h5>
         Age: {props.details.age}
        </h5>
        ____________________________________________
    </div>
  )
}
