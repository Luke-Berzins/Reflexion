import {useState, useEffect} from "react"


export default function Usersession(props) {
  return (
    <div className='usersession'>

      <h1>{props.name}</h1>
      <div className='buttons'>
        <button className="btn btn-info" onClick={() => window.location= `/session/${props.id}`}>Start</button>&nbsp;&nbsp;&nbsp;
        <button className="btn btn-danger" type='submit'>Delete</button>
      </div>
    </div>
  )
}
