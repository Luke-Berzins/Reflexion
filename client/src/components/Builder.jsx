import React from 'react'
import Board from './Board'
import Card from './Card'

import "./Builder.scss"

export default function Builder(props) {

  return (
    <div id="builder">

      <main className='flexbox'>
        <Board id="board_1" className="board">
          <Card id='card_1' className="card" draggable="true">
            <p>Card One</p>
          </Card>
        </Board>
        <Board id="board_2" className="board">
          <Card id='card_2' className="card" draggable="true">
            <p>Card Two</p>
          </Card>
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
