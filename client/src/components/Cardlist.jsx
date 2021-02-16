import React from 'react'
import Card from './Card'

export default function DayList(props) {
  let counter = 0;
  const cardList = props.poses.map(poses => {
    let counter = `card_${poses.id}`
  return (  <Card
  id={counter}
  className="card"
  draggable="true"
  name={poses.name}
  description={poses.description}
  overlay={poses.overlay}
  icon={poses.icon}
  />
  )
  });
  return cardList;
}
