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

      <div style={{display:'flex', flexDirection:'column', marginTop:'6%', marginRight:'15%'}}>
        <div
          className='pic'
          style={{width:'600px',height:'300px',border:'1px solid #000',backgroundColor:'white', marginTop: '6%', marginRight: '20%'}}
        >
          Picture!
        </div>
        <div
          className='pic'
          style={{width:'600px',height:'300px',border:'1px solid #000',backgroundColor:'white', marginTop: '6%', marginRight: '20%'}}
        >
          Description Box!
        </div>

        <section>
          <button style={{marginTop: '5%'}} type="button" class="btn btn-info">Start!</button>
        </section>
      </div>
    </div>
  )
}
