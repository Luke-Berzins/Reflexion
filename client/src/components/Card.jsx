import React from 'react'

function Card (props) {

  const dragStart = e => {

    const target = e.target;
    e.dataTransfer.setData('card_id', target.id);


  }

  const dragOver = e => {
    e.stopPropagation();
  }

  return (
    <div
      id={props.id}
      className={props.className}
      draggable={props.draggable}
      onDragStart={dragStart}
      onDragOver={dragOver}
    >
      <h1>{props.name}</h1>
    </div>
  )
}

export default Card
