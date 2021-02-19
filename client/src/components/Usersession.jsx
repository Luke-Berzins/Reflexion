import {useState, useEffect} from "react"


export default function Usersession(props) {
  return (
    <div className='usersession'>

      <h1>{props.name}</h1>
      <div>
        <button className="btn btn-info" onClick={() => window.locatio= `/session/${props.id}`}>Start</button>
        <button className="btn btn-danger" type='submit'>Delete</button>
      </div>
    </div>
  )
}
