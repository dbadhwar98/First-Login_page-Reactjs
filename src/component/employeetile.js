import React from 'react'

export default function employeetile(props) {
  return (
    <div>

      <h5>
        Id: {props.id}
      </h5>
      <h5>
         Name:{props.name}
        </h5>
        <h5>
         Age:{props.age}
        </h5>
        ____________________________________________
    </div>
  )
}
