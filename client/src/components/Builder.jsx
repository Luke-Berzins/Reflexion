import React from 'react'
import Board from './Board'
import Card from './Card'
import Cardlist from './Cardlist'
import axios from "axios";
import "./Builder.scss"



const generateSequence = () => {
  const list = document.getElementById('board_2').children
  const poseArray = [...list].map(x => x.id.split('').pop() * 1)
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

  })
  .catch(err => console.log(err))

}
export default function Builder(props) {

  return (
    <div id="builder">
      <main className='flexbox'>
        <Board id="board_1" className="board">
          <Cardlist id="cardlist_1" className="card-list" poses={props.poses}/>
        </Board>
        <Board id="board_2" className="board">
        </Board>
      </main>

      <div className="picc">
        <div className='picture'>
          Picture!
        </div>
        <div
          className='picture'>
          Description Box!
        </div>

        <section className='but'>
          <button type="button" class="btn btn-primary btn-lg" onClick={generateSequence}>Build!</button>
        </section>
      </div>
    </div>
  )
}
