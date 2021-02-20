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
    sequenceName: "Give your session a name (optional):",
    show: false,
  })

  const generateSequence = () => {
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

    <div id="initial" className="animate__animated animate__fadeIn">
      <button className="btn btn-primary btn-lg " onClick={() => setState({...state, show: true})}>Begin</button>
    </div>

  )

  return (

    <div id="builder" className="animate__animated animate__fadeIn">


      <main className='flexbox animate__animated animate__fadeIn'>
        <Board id="board_1" className="board">
          <Cardlist id="cardlist_1" className="card-list" poses={props.poses} setPose={setPose}/>
        </Board>
        <Board id="board_2" className="board">
        </Board>
      </main>

      <div className="picc animate__animated animate__fadeIn animate__slow">
        <div className='picture animate__animated animate__fadeIn animate__slower'>
        <h5>{state.selectedPose.name}</h5>
        {state.selectedPose.photo ? <img src={state.selectedPose.photo} alt="selectedPose"></img> :
        <div>
        <h5>Drag & Drop to Build Your Sequence:</h5>
        <img src="https://i.imgur.com/JOf6DI0.gif" alt="instructAnim"></img>
        </div>}
        </div>
        <div className='description animate__animated animate__fadeIn animate__slower'>
          <h4>{state.selectedPose.description}</h4>
        </div>
        <br></br>
        <h4>{state.sequenceName}</h4>
        {/* <form class="form-inline" maxLength="80" onChange={handleInputChange}> */}
        <div className="save-sequence">
        <input type="text" id="seqeuenceName" name="sequenceName" className="form-inline" maxLength="80" onChange={handleInputChange} />
        <button type="submit" className="btn btn-secondary btn-lg" onClick={generateSequence}>Save & Begin</button>
        </div>
        {/* </form> */}

        {/* { <section className='but'>
          <h1>{state.sequenceName}</h1>
          <input name="sequenceName" type="sequenceName" className="form-control" maxLength="40" id="sequenceName"  onChange={handleInputChange}/>
          <button type="button" className="btn btn-secondary btn-lg" onClick={generateSequence} >Build!</button>
        </section>} */}
      </div>
    </div>
  )
}
