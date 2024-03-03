import React from 'react'
import './taskList.css';
export default function Tasklist(props) {
  return (
    <div className='Tasklist'>
        <p>{props.id}</p>
        <p>{props.name}</p>
        <button onClick={props.handledelete}> Delete</button>
    </div>
  )
}
