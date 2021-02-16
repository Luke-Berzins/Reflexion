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
          <Card id='card_2' className="card" draggable="true">
            <p>Card Two</p>
          </Card>
        </Board>
      </main>
    </div>
  )
}
