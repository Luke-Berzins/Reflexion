import {useState, useEffect} from "react"
import axios from "axios"
import "./Usersession.scss"

const deleteSession = sequenceID => {
  document.getElementById(sequenceID).style.display = "none"
  axios.delete("/api/sequences", {
    params: {
      sequence: sequenceID
    }
  })
}

export default function Usersession(props) {
  const [state, setState] = useState({
    transition: null
  })

   if (state.transition === 'delete') {
    return (
      <div className='usersession' id={props.id}>
        <h5>{props.name}</h5>
        <h5 className="deleteWarning">Delete this sequence?</h5>
        <div className='buttons'>
        <button className="btn btn-danger" type='submit' onClick={() => deleteSession(props.id)}>Delete</button>&nbsp;&nbsp;&nbsp;
        <button className="btn btn-warning" type='submit' onClick={() => setState({transition: null})}>Cancel</button>
        </div>
      </div>
    )
  }

  if (state.transition === 'start') {
    return (
      <div className='usersession startconfirm'>
        <h5>{props.name}</h5>
        <h5 style={{color:'blue'}}>Ready to Start?</h5>
        <div className='buttons'>
        <button className="btn btn-info" onClick={() => window.location=`/session/${props.id}`}>Start</button>&nbsp;&nbsp;&nbsp;
        <button className="btn btn-warning" type='submit' onClick={() => setState({transition: null})}>Cancel</button>
        </div>
      </div>
    )
  }


  return (
    <div className='usersession'>
      <h5>{props.name}</h5>
      <div className='buttons'>
        <button className="btn btn-info" onClick={() => setState({transition: 'start'})}>Start</button>&nbsp;&nbsp;&nbsp;
        <button className="btn btn-danger" type='submit' onClick={() => setState({transition: 'delete'})}>Delete</button>
      </div>
    </div>
  )
}
