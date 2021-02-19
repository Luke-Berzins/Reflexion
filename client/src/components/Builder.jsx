import React from 'react'
import Board from './Board'
import Card from './Card'
import Cardlist from './Cardlist'
import axios from "axios";
import "./Builder.scss"
import { useState } from "react";


export default function Builder(props) {

  const [state, setState] = useState({
    selectedPose: {}
  })

  const generateSequence = () => {
    const list = document.getElementById('board_2').children
    const poseArray = [...list].map(x => x.id.split('').pop() * 1)
    if (poseArray === 0) {
      return;
    }
    axios.post('/api/sequences', {
      name: "JIMMY",
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
        {state.selectedPose.photo ? <img src={state.selectedPose.photo}></img> : <p>Please drag a pose to the build square to build your session. Click on any pose for more information</p>}
        </div>
        <div
          className='description'>
          <b>{state.selectedPose.description}</b>
        </div>

        <section className='but'>
          <button type="button" class="btn btn-primary btn-lg" onClick={generateSequence} >Build!</button>
        </section>
      </div>
    </div>
  )
}
