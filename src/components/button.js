import React from 'react'
import './comp.css'
function Button(props) {
  return (
    <div>
        <button>{props.input}</button>
    </div>
  )
}

export default Button