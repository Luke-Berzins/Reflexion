import React from 'react'

function Card (props) {
  const selectedDay = props.name;
  const dragStart = e => {

    const target = e.target;
    e.dataTransfer.setData('card_id', target.id);

    // setTimeout(() => {
    //   target.style.display = "none";
    // }, 0);
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
      onClick={() => props.setPose(props.poseInfo)}
    >
      <p><b>{props.name}</b></p>
    </div>
  )
}

export default Card
