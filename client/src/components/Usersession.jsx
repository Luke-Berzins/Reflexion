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
      <div className='usersession'>
        <h1>{props.name}</h1>
        <div>
          <button className="btn btn-info" onClick={() => window.location=`/session/${props.id}`}>Start</button>
          <button className="btn btn-danger" type='submit' >Delete</button>
        </div>
      </div>
    )
  }

  if (state.transition === 'start') {
    return (
      <div className='usersession startconfirm'>
        <h1>{props.name}</h1>
        <h1>Ready to Start?</h1>

        <button className="btn btn-info" onClick={() => window.location=`/session/${props.id}`}>Start</button>
      </div>
    )
  }



  return (
    <div className='usersession'>
      <h1>{props.name}</h1>
      <div>
        <button className="btn btn-info" onClick={() => setState({ transition: 'start'})}>Start</button>
        <button className="btn btn-danger" type='submit' >Delete</button>
      </div>
    </div>
  )
}
