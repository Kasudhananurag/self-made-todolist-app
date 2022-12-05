import React from 'react'
import C from './C'

const B = (props) => {
  return (
    <div>
      in b component
      <C name = {props.name}/>
    </div>
  )
}

export default B
