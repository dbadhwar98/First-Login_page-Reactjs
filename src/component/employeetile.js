import React from 'react'

export default function employeetile(props) {
 console.log(props.details.id)
  return (
    <div>
      <h5>
        {props.details.id}
      </h5>
      <h5>
        {props.details.name}
        </h5>
        <h5>
          {props.details.age}
        </h5>
    </div>
  )
}
