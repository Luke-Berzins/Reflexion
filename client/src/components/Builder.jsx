import React from 'react'
import Board from './Board'
import Cardlist from './Cardlist'
import axios from "axios";
import "./Builder.scss"
import { useState } from "react";
import { useCookies } from 'react-cookie';

export default function Builder(props) {
  const [cookies, setCookie] = useCookies(['name', 'id']);
  const [state, setState] = useState({
    selectedPose: {},
    sequenceName: "Title Your Session!",
    show: false,
  })

  const generateSequence = () => {
    console.log(cookies.id)
    const list = document.getElementById('board_2').children
    const poseArray = [...list].map(x => x.id.split('').pop() * 1)
    if (list.length === 0) {
      return;
    }
    axios.post('/api/sequences', {
      user_id: cookies.id,
      name: state.sequenceName,
    })
    .then(res => {
      const seqID = res.data.rows[0].id
      let counter = 1;
      poseArray.forEach(pose => {
        axios.post('/api/sequence_pose', {
          sequence_id: seqID,
          pose_id: pose,
          position: counter
        })
        counter++;
      })
      window.location = `/session/${seqID}`
    })
    .catch(err => console.log(err))
  }

  const setPose = selectedPose=> {
    console.log(selectedPose)
    setState({ ...state, selectedPose });
  }

  const handleInputChange = e => {
    setState({...state, sequenceName: e.target.value})
  }

  if(state.show === false) return (
    <div id="initial">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <button className="btn btn-primary btn-lg btn-block" onClick={() => setState({...state, show: true})}>Build your Reflexion</button>
    </div>
  )

  return (

    <div id="builder">

      <main className='flexbox'>
        <Board id="board_1" className="board">
          <Cardlist id="cardlist_1" className="card-list" poses={props.poses} setPose={setPose}/>
        </Board>
        <Board id="board_2" className="board">
        </Board>
      </main>

      <div className="picc">
        <div className='picture'>
          <h3>{state.selectedPose.name}</h3>
        {state.selectedPose.photo ? <img src={state.selectedPose.photo}></img> : <p>Please drag a pose to the build square to build your session. Click on any pose for more information</p>}
        </div>
        <div
          className='description'>
          <b>{state.selectedPose.description}</b>
        </div>

        <section className='but'>
          <h1>{state.sequenceName}</h1>
          <input name="sequenceName" type="sequenceName" className="form-control" id="sequenceName"  onChange={handleInputChange}/>
          <button type="button" className="btn btn-secondary btn-lg" onClick={generateSequence} >Build!</button>
        </section>
      </div>
    </div>
  )
}
