import {useState, useEffect} from "react"


export default function Usersession(props) {
  return (
    <div>

      <br></br>
      <br></br>
      <h1>{props.name}</h1>
      <button onClick={() => window.locatio= `/session/${props.id}`}>Start</button>
    </div>
  )
}
