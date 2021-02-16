import React from 'react'
import Board from './Board'
import Card from './Card'
import Cardlist from './Cardlist'

import "./Builder.scss"

const generateSequence = (selectedPoses) => {

  const list = document.getElementById('board_2').children
  const arr = [...list];
  arr.forEach(x => console.log(x.id.split('').pop()))

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
