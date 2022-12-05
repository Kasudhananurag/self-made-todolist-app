import React from 'react'
import B from './B'

const A = (props) => {
  return (
    <div>
      in a component
      <B name = {props.name}/>
    </div>
  )
}

export default A
