import React from 'react'


function Card (props) {
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
      onMouseDown={() => props.setPose(props.poseInfo)}
    >
      <p><b>{props.name}</b></p>
      <img className="cardImage" src={props.poseInfo.icon} alt="icon" width="70" height="70"></img>
    </div>
  )
}

export default Card
