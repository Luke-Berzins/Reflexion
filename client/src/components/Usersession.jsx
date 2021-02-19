import {useState, useEffect} from "react"
import axios from "axios"
import "./Usersession.scss"

const deleteSession = sessionID => {
  axios.get("/api/poses/build", {
    params: {
      session: "JOHNNY"
    }
  })
}

export default function Usersession(props) {
  const [state, setState] = useState({
    transition: null
  })

   if (state.transition === 'delete') {
    return (
      <div className='usersession startconfirm'>
        <h1>{props.name}</h1>
        <h3 style={{color:'red'}}>Are you sure you want to <b>delete?</b></h3>
        <div className='buttons'>
        <button className="btn btn-danger" type='submit'>Delete</button>&nbsp;&nbsp;&nbsp;
        <button className="btn btn-warning" type='submit' onClick={() => setState({transition: null})}>Cancel</button>
        </div>
      </div>
    )
  }

  if (state.transition === 'start') {
    return (
      <div className='usersession startconfirm'>
        <h1>{props.name}</h1>
        <h2 style={{color:'blue'}}>Ready to Start?</h2>
        <div className='buttons'>

        <button className="btn btn-info" onClick={() => window.location=`/session/${props.id}`}>Start</button>&nbsp;&nbsp;&nbsp;
        <button className="btn btn-warning" type='submit' onClick={() => setState({transition: null})}>Cancel</button>
        </div>
      </div>
    )
  }


  return (
    <div className='usersession'>
      <h1>{props.name}</h1>
      <div className='buttons'>
        <button className="btn btn-info" onClick={() => setState({transition: 'start'})}>Start</button>&nbsp;&nbsp;&nbsp;
        <button className="btn btn-danger" type='submit' onClick={() => setState({transition: 'delete'})}>Delete</button>
      </div>
    </div>
  )
}
