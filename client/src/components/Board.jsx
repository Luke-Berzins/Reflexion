import React from 'react'

function Board(props) {
  let flag = 0;

  const handleDragEnter = (e) => {
    console.log(e.target)
    if (e.target === document.getElementById("board_2")) {
      console.log("nice")
      flag = 1;
    } else if (e.target.className === "card"){
      console.log("parent", e.target.parentNode)
      flag = 2;
    } else {
      flag = 0;
    }
  }

  const drop = e => {
    e.preventDefault();
    const card_id = e.dataTransfer.getData('card_id');
    const card = document.getElementById(card_id)
    card.style.display = 'block';
     // e.target.parentNode.prepend(card);
    if (flag  === 1) {
      e.target.appendChild(card);
    } else if (e.target.className === "card") {
      e.target.parentNode.appendChild(card)
      // document.getElementById("board_2").appendChild(card)
   }
  }


  const dragOver = e => {
    e.preventDefault();
  }

  return (
    <div
      id={props.id}
      className={props.className}
      onDrop={drop}
      onDragOver={dragOver}
      onDragEnter={(e) => handleDragEnter(e)}
    >
      { props.children }
    </div>
  )
}

export default Board

