import React from 'react'
import Board from './Board'
import Card from './Card'
import Cardlist from './Cardlist'

import "./Builder.scss"

export default function Builder(props) {

  return (
    <div>
      <main className='flexbox'>
        <Board id="board_1" className="board">
          <Cardlist poses={props.poses}/>
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
          <button type="button" class="btn btn-primary btn-lg">Start!</button>
        </section>
      </div>
    </div>
  )
}
